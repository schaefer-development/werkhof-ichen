const { format } = require('date-fns')

module.exports = function (anmeldung) {
  const veranstaltungs_datum = Date.parse(anmeldung.veranstaltung.Datum)
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

- - - - - -
    

Hallo  ${anmeldung.name},

vielen Dank für Ihre Anmeldung für die Veranstaltung "${anmeldung.veranstaltung.Titel}" am ${format(veranstaltungs_datum, 'dd.MM.yyyy')}.

Zurzeit sind alle freien Plätze für diesen Kurs vergeben. Sobald ein Platz frei wird, werde ich mich bei Ihnen telefonisch oder per E-Mail melden.


Viele Grüße und bis bald!
ichen

- - - - - -

Rechtliche Hinweise:
Der Teilnehmerplatz wird für Sie nach Vorauszahlung der Kursgebühr verbindlich reserviert. 
Sie haben die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird zurückerstattet. 
Es besteht kein Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist. Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.

`,
    html: `
<p>Hallo  ${anmeldung.name},</p>
<p>
vielen Dank für Ihre Anmeldung für die Veranstaltung "${anmeldung.veranstaltung.Titel}" am ${format(veranstaltungs_datum, 'dd.MM.yyyy')}.</p>
</p>

<p>
Zurzeit sind alle freien Plätze für diesen Kurs vergeben. Sobald ein Platz frei wird, werde ich mich bei Ihnen telefonisch oder per E-Mail melden.
</p>

<p>Viele Grüße und bis bald!<br>
ichen
<br />
<br />
</p>
<p>
------
<br />
Rechtliche Hinweise:<br />
Der Teilnehmerplatz wird für Sie nach Vorauszahlung der Kursgebühr verbindlich reserviert. 
Sie haben die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird zurückerstattet. 
Es besteht kein Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist. Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
</p>
`,
  }
}
