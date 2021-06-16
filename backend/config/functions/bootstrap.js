'use strict';

const pluralize = require('pluralize')
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
  pluralize.addPluralRule('veranstaltung', 'veranstaltungen')
  pluralize.addPluralRule('anmeldung', 'anmeldungen')
  pluralize.addPluralRule('veranstaltung', 'veranstaltungen')
  pluralize.addPluralRule('terminabsprache', 'terminabsprachen')
  pluralize.addPluralRule('bilderstrecke', 'bilderstrecken')
};
