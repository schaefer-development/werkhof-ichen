'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const templateAnmeldung = require('../../../emailTemplates/anmeldung.js')
const templateWarteliste = require('../../../emailTemplates/warteliste.js')

const isAvailable = async (veranstaltung) => {
  const { maximaleAnzahlTeilnehmer } = veranstaltung
  if (!maximaleAnzahlTeilnehmer) return true
  const countAnmeldungen = await strapi.query('Anmeldung').count({veranstaltung: veranstaltung.id});
  return countAnmeldungen <= maximaleAnzahlTeilnehmer
}


module.exports = {
  lifecycles: {

    async afterCreate(anmeldung, data) {
      strapi.log.debug('Anmeldung created!', anmeldung, data)
      const { veranstaltung } = anmeldung
      const emailTemplate = (await isAvailable(veranstaltung)) ? templateAnmeldung : templateWarteliste
      const { text, html } = emailTemplate(anmeldung)

      await strapi.plugins['email'].services.email.send({
        to: anmeldung.email,
        subject: 'Ihre Anmeldung auf werkhof-ichen.de',
        text,
        html
      });
    }
  }
};
