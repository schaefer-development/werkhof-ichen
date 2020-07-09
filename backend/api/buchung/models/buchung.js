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
       subject: 'Use strapi email provider successfully',
       text: 'Hello world!',
       html: 'Hello world!',
     });
    }
  }
};
