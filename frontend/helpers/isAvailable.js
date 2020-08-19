export default function (veranstaltung) {
  const { maximaleAnzahlTeilnehmer } = veranstaltung
  if (!maximaleAnzahlTeilnehmer) return true
  return veranstaltung.anmeldungen.length < maximaleAnzahlTeilnehmer
}
