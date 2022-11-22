export type Anmeldung = {
  id: string
  updatedAt: string
}

export type Veranstaltung = {
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
  anmeldungen: Anmeldung[]
}

export type RegistrationPayload = {
  name: string
  email: string
  telefonNummer: string
  strasseHausnummer: string
  veranstaltung: Veranstaltung
}


export type GraphqlCreateAnmeldung =  {
  "id": string,
  "name": string
  "updatedAt": string
  veranstaltung: Pick<Veranstaltung, 'id' | 'titel' | 'datum' | 'preis'>
}
