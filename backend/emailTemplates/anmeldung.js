const { addDays } = require('date-fns')
const { format } = require('date-fns')

module.exports = function (anmeldung) {
  const veranstaltungs_datum = Date.parse(anmeldung.veranstaltung.Datum)
  const anmelde_datum = Date.parse(anmeldung.updated_at)
  const date_ahead = addDays(veranstaltungs_datum, 3)
  const date_payment = new Date(Math.min(veranstaltungs_datum, date_ahead))
  return {
    text: `
Werkhof ichen
Irmina Schmitz

Im Alten Breidt 11a
53797 Lohmar-Breidt

Telefon: 02246 . 31 97
Fax: 02246 . 94 94 090
E-Mail: info@werkhof-ichen.de
Web: werkhof-ichen.de

Breidt, den ${format(anmelde_datum, 'dd.MM.yyyy')}

- - - - - -

Hallo  ${anmeldung.name},

vielen Dank für Ihre Anmeldung für die Veranstaltung "${anmeldung.veranstaltung.Titel}" am ${format(veranstaltungs_datum, 'dd.MM.yyyy')}.

Damit der Teilnehmerplatz verbindlich reserviert wird, überweisen Sie bitte bis zum ${format(date_payment, 'dd.MM.yyyy')} den Betrag in Höhe von ${anmeldung.veranstaltung.Preis} Euro auf folgendes Konto:

IBAN: DE24370502990163007123
BIC: COKSDE33
Bank: Kreissparkasse Köln

Viele Grüße und bis bald!
ichen

- - - - - -

Rechtliche Hinweise:
Der Teilnehmerplatz wird für Sie nach Vorauszahlung der Kursgebühr verbindlich reserviert. 
Sie haben die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird zurückerstattet. 
Es besteht kein Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist. Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
`,
    html: `
    <p>
    <img src="https://res.cloudinary.com/dk6nbbr6c/image/upload/v1601728064/logo_ichen_mail_bqwwvn.png" alt="Logo Werkhof ichen" /><br/>
    </p>
    <p><strong>Werkhof ichen</strong><br />
    
    Irmina Schmitz</p>
    <p>Im Alten Breidt 11a<br />
    53797 Lohmar-Breidt</p>
    <p>
    Telefon: 02246 . 31 97<br />
    Fax: 02246 . 94 94 090<br />
    E-Mail: info@werkhof-ichen.de<br />
    Web: werkhof-ichen.de</p>
<p>
<p>
Breidt, den ${format(anmelde_datum, 'dd.MM.yyyy')}
</p>
- - - - - -
<br />
</p>
<p>Hallo  ${anmeldung.name},</p>
<p>
vielen Dank für Ihre Anmeldung für die Veranstaltung "${anmeldung.veranstaltung.Titel}" am ${format(veranstaltungs_datum, 'dd.MM.yyyy')}.</p>
<p>
Damit der Teilnehmerplatz verbindlich reserviert wird, überweisen Sie bitte bis zum ${format(date_payment, 'dd.MM.yyyy')} den Betrag in Höhe von ${anmeldung.veranstaltung.Preis} Euro auf folgendes Konto:
</p>
<p>
IBAN: DE24370502990163007123 <br />
BIC: COKSDE33<br />
Bank: Kreissparkasse Köln
</p>
<p>Viele Grüße und bis bald!<br>
ichen
<br />
</p>
<p>
- - - - - -
<br />
<br />
Rechtliche Hinweise:<br />
Der Teilnehmerplatz wird für Sie nach Vorauszahlung der Kursgebühr verbindlich reserviert. 
Sie haben die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird zurückerstattet. 
Es besteht kein Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist. Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
</p>
       `,
  }
}
