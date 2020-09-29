const { addDays } = require('date-fns')
const { format } = require('date-fns')

module.exports = function (anmeldung) {
  const veranstaltungs_datum = Date.parse(anmeldung.veranstaltung.Datum)
  const date_ahead = addDays(veranstaltungs_datum, 3)
  const date_payment = new Date(Math.min(veranstaltungs_datum, date_ahead))
  return {
    text: `
Hallo  ${ anmeldung.name},

vielen Dank für Ihre Anmeldung für die Veranstaltung "${ anmeldung.veranstaltung.Titel}" am ${format(veranstaltungs_datum, 'dd.MM.yyyy')}.

Damit der Teilnehmerplatz verbindlich reserviert wird, überweisen Sie bitte bis zum ${ format(date_payment, 'dd.MM.yyyy')} den Betrag in Höhe von ${anmeldung.veranstaltung.Preis} Euro auf folgendes Konto:

IBAN: DE24370502990163007123
BIC: COKSDE33
Bank: Kreissparkasse Köln

Viele Grüße und bis bald!
ichen

Rechtliche Hinweise:
Der Teilnehmerplatz wird für Sie nach Vorauszahlung der Kursgebühr verbindlich reserviert. 
Sie haben die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird zurückerstattet. 
Es besteht kein Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist habe. Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
`,
    html: `
<p>Hallo  ${ anmeldung.name},</p>
<p>
vielen Dank für Ihre Anmeldung für die Veranstaltung "${ anmeldung.veranstaltung.Titel}" am ${format(veranstaltungs_datum, 'dd.MM.yyyy')}.</p>
<p>
Damit der Teilnehmerplatz verbindlich reserviert wird, überweisen Sie bitte bis zum ${ format(date_payment, 'dd.MM.yyyy')} den Betrag in Höhe von ${anmeldung.veranstaltung.Preis} Euro auf folgendes Konto:
</p>
<p>
IBAN: DE24370502990163007123 <br />
BIC: COKSDE33<br />
Bank: Kreissparkasse Köln
</p>
<p>Viele Grüße und bis bald!<br>
ichen
<br />
<br />
</p>
<p>
<hr>
<br />
Rechtliche Hinweise:<br />
Der Teilnehmerplatz wird für Sie nach Vorauszahlung der Kursgebühr verbindlich reserviert. 
Sie haben die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird zurückerstattet. 
Es besteht kein Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist habe. Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
</p>
       `,
  }
}
