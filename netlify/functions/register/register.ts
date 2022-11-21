import { GraphQLClient, gql } from 'graphql-request'
import { Handler } from '@netlify/functions'

type Veranstaltung = {
  id: string
  titel: string
  datum: string
  preis: number
  maximaleAnzahlTeilnehmer: number
  beschreibung: {
    html: string
  }
  kurzbeschreibung: string
  anzeigedatum: string
  vorschaubild: {
    url: string
  }
  anmeldungen: unknown[]
}

type RegistrationPayload = {
  name: string
  email: string
  telefonNummer: string
  strasseHausnummer: string
  veranstaltung: Veranstaltung
}

const GQL_HOST = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clakyyrxk19kn01ta1ckn11y7/master'
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN

const mutation = gql`
mutation anmeldung($name: String!, $email: String!, $strasseUndHausnummer: String, $plzUndOrt: String, $telefonnummer: String, $veranstaltungId: ID!) {
  createAnmeldung(
    data: {name: $name, email: $email, strasseUndHausnummer: $strasseUndHausnummer, plzUndOrt: $plzUndOrt, telefonnummer: $telefonnummer, veranstaltung: {connect: {id: $veranstaltungId}}}
  ) {
    id
    name
    veranstaltung {
      id
      titel
    }
  }
}
`

const graphQLClient = new GraphQLClient(GQL_HOST, {
  headers: {
    authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
})

export const handler: Handler = async (event, context) => {
  const data: RegistrationPayload = JSON.parse(event.body)
  const { name, email, telefonNummer, strasseHausnummer, veranstaltung } = data
  const variables = { name, email, telefonNummer, strasseHausnummer, veranstaltungId: veranstaltung.id }
  await graphQLClient.request(mutation, variables)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
