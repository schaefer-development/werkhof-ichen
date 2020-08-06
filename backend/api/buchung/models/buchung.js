'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {

   async afterCreate(result, data) {
     const { email_adresse, name } = data
     strapi.log.debug('Buchung created!', result, data)
     await strapi.plugins['email'].services.email.send({
       to: email_adresse,
       from: 'werkhof-ichen@example.org',
       subject: 'Ihre Buchung auf werkhof-ichen.de',
       text: `
       Hallo  ${ result.name }, 
       vielen Dank für Ihre Buchung. 
       Kursname
       Datum
       Bitte überweisen Sie den Betrag in Höhe von PREIS innerhalb von XX Tagen auf folgendes Konto:
       
       IBAN: DE24370502990163007123 
       BIC: COKSDE33<br />
       Bank: Kreissparkasse Köln
       
       Der Teilnehmerplatz ist erst mit Zahlungseingang verbindlich reserviert.
       Viele Grüße und bis bald!
       ichen    

       Rechtliche Hinweise:
       Der Teilnehmerplatz wird für mich nach
       Vorauszahlung der Kursgebühr verbindlich reserviert. Ich habe die Möglichkeit, bis 14 Tage vor
       Beginn des Kurses von dieser Anmeldung zurück zu treten und die vorausgezahlte Kursgebühr wird
       zurück erstattet. Mir ist bekannt, dass ich keinen Anspruch auf Rückerstattung der
       Gebühr bei einem Rücktritt außerhalb dieser Frist habe.
       Die Kursgebühr Erstattung erfolgt nur mit Attest oder wenn der Platz weitervergeben werden kann. 
        `,
       html: `
        <p>Hallo  ${ result.name },</p>
        <p>
        vielen Dank für Ihre Buchung.  </p>
        <p>Kursname</p>
        <p>Datum</p>
        <p>Bitte überweisen Sie den Betrag in Höhe von PREIS innerhalb von XX Tagen auf folgendes Konto:</p>
        <p>
        IBAN: DE24370502990163007123 <br />
        BIC: COKSDE33<br />
        Bank: Kreissparkasse Köln
        </p>
        <p>Der Teilnehmerplatz ist erst mit Zahlungseingang verbindlich reserviert.</p>
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
     });
    }
  }
};
