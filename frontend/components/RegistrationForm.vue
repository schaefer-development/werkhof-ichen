<template>
  <v-card id="registration-form" rounded="0" flat class="px-0 pt-4">
    <v-card-text>
      <div id="alert-wrapper">
        <v-alert v-if="success" type="success">
          <template v-if="available">
            <!-- -->
            <!-- -->
            <span class="font-weight-bold">DAS HAT GEKLAPPT!</span>
            <h3 class="py-6 ichen_blue--text text-h2">
              Erfolgreich angemeldet für:
              <br />
              {{ veranstaltung.Titel }}
            </h3>
            <!-- -->
          </template>
          <template v-else>
            <!-- -->
            <span class="font-weight-bold">DAS HAT GEKLAPPT!</span>
            <h3 class="py-6 ichen_blue--text text-h2">
              Erfolgreich zur Warteliste hinzugefügt:
              <br />
              {{ veranstaltung.Titel }}
            </h3>
            <!-- -->
          </template>
          <p>
            Sie erhalten in den nächsten Minuten eine Bestätigungsmail mit allen
            weiteren Details. Wenn Sie keine Nachricht erhalten haben, schauen
            Sie auch bitte einmal in Ihrem Spamordner nach.
          </p>
          <p>
            Falls Sie keine Bestätigungsmail erhalten haben, nehmen Sie bitte
            Kontakt mit mir auf:
            <br />Telefon: 02246 . 31 97 oder per E-Mail:
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </p>
          <p>
            <v-btn depressed color="ichen_blue white--text" @click="confirm"
              >Verstanden</v-btn
            >
          </p>
        </v-alert>

        <v-form v-else v-model="valid">
          <p class="text-right my-0">
            <v-btn
              fab
              depressed
              small
              dark
              aria-label="Abbrechen"
              color="ichen_blue"
              @click="cancel"
            >
              <v-icon dark>mdi-close</v-icon>
            </v-btn>
          </p>
          <v-card-title class="ichen_blue--text text-h2 px-0">{{
            veranstaltung.Titel
          }}</v-card-title>
          <div
            class="event_detail ichen_brown--text font-weight-bold"
            v-html="$md.render(veranstaltung.Anzeigedatum)"
          ></div>

          <div class="event_detail ichen_brown--text font-weight-bold">
            {{ veranstaltung.Preis }} € (plus Materialkosten)
          </div>

          <v-img
            class="shortlist_divider pt-6 pb-7 my-0 mx-auto"
            src="/sewing_needle_brown.svg"
            alt="Nähnaht"
            contain
            justify="center"
            width="95%"
            max-width="350px"
          />
          <p v-html="$md.render(veranstaltung.Beschreibung)"></p>

          <!-- -->

          <v-img
            class="shortlist_divider pt-6 pb-7 mx-auto"
            src="/sewing_needle_brown.svg"
            alt="Nähnaht"
            contain
            justify="center"
            width="95%"
            max-width="350px"
          />
          <p class="pt-6 pb-3 ma-0">
            <template v-if="available">
              <strong class="ichen_green--text">
                <v-icon color="ichen_green" class="pr-1"
                  >mdi-check-circle</v-icon
                >Noch Plätze frei
              </strong>
            </template>
            <template v-else>
              <strong class="error--text">
                <v-icon color="error" class="pr-1">mdi-alert-circle</v-icon
                >Aktuell sind alle Plätze belegt, es gibt aber eine WARTELISTE.
              </strong>
              <br />
            </template>
          </p>
          <!-- -->
          <h3 class="ichen_blue--text text-h2">
            <template v-if="available">Anmeldeformular</template>
            <template v-else>Auf Warteliste setzen</template>
          </h3>
          <p></p>
          <v-text-field
            v-model="anmeldung.name"
            outlined
            :rules="requiredRules"
            required
            label="Vor- und Nachname"
            @change="normalize"
          ></v-text-field>

          <v-text-field
            v-model="anmeldung.email"
            outlined
            :rules="emailRules"
            required
            label="E-Mailadresse (beispiel@beispiel.de – keine Leerzeichen)"
            @change="normalize"
          ></v-text-field>
          <v-text-field
            v-model="anmeldung.telefonNummer"
            outlined
            :rules="phoneNumberRules"
            label="Telefonnummer"
            @change="normalize"
          ></v-text-field>
          <v-text-field
            v-model="anmeldung.strasseHausnummer"
            outlined
            @change="normalize"
          >
            <template v-slot:label>
              <div>
                <div>Straße und Hausnummer</div>
                <small>(optional)</small>
              </div>
            </template>
          </v-text-field>
          <v-text-field v-model="anmeldung.plzOrt" outlined @change="normalize">
            <template v-slot:label>
              <div>
                <div>Postleitzahl und Ort</div>
                <small>(optional)</small>
              </div>
            </template>
          </v-text-field>
          <v-checkbox v-model="agb" :rules="agbRules" required>
            <template v-slot:label>
              <div>
                <div>
                  Ich habe die
                  <nuxt-link to="/agb">AGB</nuxt-link>&nbsp;und die
                  Informationen zum
                  <nuxt-link to="/datenschutz">Datenschutz</nuxt-link
                  >&nbsp;gelesen und stimme beiden zu.
                </div>
              </div>
            </template>
          </v-checkbox>
          <v-alert text type="info" class="font-weight-bold mt-4 mb-10">
            <template v-if="available"
              >Ihr Platz ist erst mit Zahlungseingang reserviert.</template
            >
            <template v-else>
              Sobald ein Platz frei wird, melde ich mich bei Ihnen telefonisch
              oder per E-Mail.
            </template>
          </v-alert>
          <v-alert v-if="error" text type="error" class="font-weight-bold">
            Ups, da ist etwas schief gelaufen. Bitte versuchen Sie es erneut und
            wenn das Problem weiterhin besteht, kontaktieren Sie mich bitte per
            E-Mail an
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>.
          </v-alert>

          <v-btn
            class="mr-4 mb-4"
            depressed
            color="ichen_red white--text"
            :disabled="!valid"
            :loading="loading"
            @click="submit"
            >{{ available ? 'Anmelden' : 'Auf Warteliste setzen' }}</v-btn
          >
          <v-btn
            depressed
            class="mb-4"
            color="ichen_blue white--text"
            @click="cancel"
            >Abbrechen</v-btn
          >
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import isAvailable from '~/helpers/isAvailable.js'
// eslint-disable-next-line no-useless-escape
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    valid: true,
    anmeldung: {
      name: '',
      email: '',
      telefonNummer: '',
      plzOrt: '',
      strasseHausnummer: '',
    },
    agb: false,
    requiredRules: [(v) => !!v || 'Muss ausgefüllt werden'],
    phoneNumberRules: [
      (v) => !!v || 'Muss ausgefüllt werden',
      (v) =>
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(v) ||
        'muss gültig sein',
    ],
    emailRules: [
      (v) => !!v || 'Muss ausgefüllt werden',
      (v) => emailRegExp.test(v) || 'Muss gültig sein',
    ],
    agbRules: [(v) => !!v || 'Sie müssen den AGB zustimmen, um fortzufahren'],
    success: false,
    error: false,
    loading: false,
  }),
  computed: {
    available() {
      return isAvailable(this.veranstaltung)
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    cancel() {
      this.$emit('cancel')
    },
    normalize() {
      for (const key in this.anmeldung) {
        this.anmeldung[key] = this.anmeldung[key].trim()
      }
    },
    async submit() {
      this.loading = true
      const { anmeldung } = this
      anmeldung.veranstaltung = this.veranstaltung
      try {
        await this.$axios.$post('/anmeldungs/', {
          ...anmeldung,
        })
        this.success = true
        this.$vuetify.goTo('#alert-wrapper', { duration: 0 })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
