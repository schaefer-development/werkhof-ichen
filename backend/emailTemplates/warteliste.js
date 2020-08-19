const { format } = require('date-fns')

module.exports = function(anmeldung) {
  const veranstaltungs_datum = Date.parse (anmeldung.veranstaltung.Datum)
  return {
    text: `
Hallo  ${ anmeldung.name },

vielen Dank für Ihre Anmeldung für die Veranstaltung "${ anmeldung.veranstaltung.Titel }" am ${ format(veranstaltungs_datum, 'dd.MM.yyyy') }.

Zurzeit sind alle freien Plätze für diesen Kurs vergeben. Sobald ein Platz frei wird, werde ich mich bei Ihnen telefonisch oder per E-Mail melden.


Viele Grüße und bis bald!
ichen

Rechtliche Hinweise:
Der Teilnehmerplatz wird für mich nach Vorauszahlung der Kursgebühr verbindlich reserviert. Ich habe die Möglichkeit, bis 14 Tage vor Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird
zurück erstattet. Mir ist bekannt, dass ich keinen Anspruch auf Rückerstattung der Gebühr bei einem Rücktritt außerhalb dieser Frist habe.
Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
`,
    html: `
<p>Hallo  ${ anmeldung.name },</p>
<p>
vielen Dank für Ihre Anmeldung für die Veranstaltung "${ anmeldung.veranstaltung.Titel }" am ${ format(veranstaltungs_datum, 'dd.MM.yyyy') }.</p>
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
<hr>
<br />
Rechtliche Hinweise:<br />
Der Teilnehmerplatz wird für mich nach
Vorauszahlung der Kursgebühr verbindlich reserviert. Ich habe die Möglichkeit, bis 14 Tage vor
Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird
zurück erstattet. Mir ist bekannt, dass ich keinen Anspruch auf Rückerstattung der
Gebühr bei einem Rücktritt außerhalb dieser Frist habe.
Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann.
</p>
`,
  }
}
