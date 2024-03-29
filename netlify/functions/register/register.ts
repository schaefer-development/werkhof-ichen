import type { RegistrationPayload } from './types'
import { GraphQLClient, gql } from 'graphql-request'
import { Handler } from '@netlify/functions'
import * as templates from './emailTemplates'
import nodemailer from 'nodemailer'
import { verify } from 'hcaptcha';


const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  SMTP_DEFAULT_REPLY_TO = 'default-reply-to@example.org',
  SMTP_DEFAULT_FROM = 'default-from@example.org',
  HYGRAPH_HOST,
  HYGRAPH_TOKEN,
  HCAPTCHA_SECRET,
} = process.env

const createMutation = gql`
mutation anmeldung($name: String!, $email: String!, $strasseUndHausnummer: String, $plzUndOrt: String, $telefonnummer: String, $veranstaltungId: ID!) {
  createAnmeldung(
    data: {name: $name, email: $email, strasseUndHausnummer: $strasseUndHausnummer, plzUndOrt: $plzUndOrt, telefonnummer: $telefonnummer, veranstaltung: {connect: {id: $veranstaltungId}}}
  ) {
    id
  }
}
`

const publishMutation  = gql`
mutation anmeldung($id: ID!) {
  publishAnmeldung(where: {id: $id}, to: PUBLISHED) {
    stage
    id
    name
    updatedAt
    veranstaltung {
      id
      titel
      datum
      preis
    }
  }
}
`

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
  secure: false, // true for 465, false for other ports
});


const graphQLClient = new GraphQLClient(HYGRAPH_HOST, {
  headers: {
    authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
})

const isAvailable = (veranstaltung: RegistrationPayload['veranstaltung']) => {
  const { maximaleAnzahlTeilnehmer } = veranstaltung
  if (!maximaleAnzahlTeilnehmer) return true
  const countAnmeldungen = veranstaltung.anmeldungen.length
  return countAnmeldungen <= maximaleAnzahlTeilnehmer
}

export const handler: Handler = async (event) => {
  const anmeldung: RegistrationPayload = JSON.parse(event.body)
  const { name, email, telefonNummer, strasseHausnummer, veranstaltung, hCaptchaResult } = anmeldung

	const verificationData = await verify(HCAPTCHA_SECRET, hCaptchaResult)
	if(!verificationData.success) throw new Error('HCaptcha Verification failed');

  const variables = { name, email, telefonNummer, strasseHausnummer, veranstaltungId: veranstaltung.id }
  const createAnmeldungResponse = await graphQLClient.request(createMutation, variables)
  const { createAnmeldung: { id } } = createAnmeldungResponse
  const publishAnmeldungResponse = await graphQLClient.request(publishMutation, { id })
  const { publishAnmeldung } = publishAnmeldungResponse
  const emailTemplate = isAvailable(veranstaltung) ? templates.register : templates.waitingList
  const { text, html } = emailTemplate(publishAnmeldung)
  await transporter.sendMail({
    from: SMTP_DEFAULT_FROM,
    cc: SMTP_DEFAULT_REPLY_TO,
    to: anmeldung.email,
    subject: 'Ihre Anmeldung auf werkhof-ichen.de',
    text,
    html
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
