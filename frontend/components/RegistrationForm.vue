<template>
  <v-card id="registration-form" rounded="0" flat class="px-0 pt-8">
    <p class="text-right pr-3">
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

    <v-card-title class="ichen_blue--text text-h2">{{
      veranstaltung.Titel
    }}</v-card-title>
    <v-card-text>
      <ul class="booking_details pt-3 pb-1">
        <li>
          <div
            class="font-weight-bold ichen_blue--text"
            v-html="$md.render(veranstaltung.Anzeigedatum)"
          ></div>
        </li>
        <li>
          <div class="font-weight-bold ichen_blue--text pt-3">
            {{ veranstaltung.Preis }} € (plus Materialkosten)
          </div>
        </li>
      </ul>
      <v-img
        class="shortlist_divider py-6 mx-auto"
        src="/sewing_needle_brown.svg"
        alt="Nähnaht"
        contain
        justify="center"
        width="95%"
        max-width="350px"
      />
      <div id="alert-wrapper">
        <v-alert v-if="success" type="success">
          <h3 class="ichen_blue--text text-h2 pb-6">
            <template v-if="available">
              Erfolgreich angemeldet
            </template>
            <template v-else>
              Erfolgreich zur Warteliste hinzugefügt
            </template>
          </h3>
          <p>
            Sie erhalten in den nächsten Minuten eine Bestätigung Ihrer
            Anmeldung mit allen weiteren Details per E-Mail. Wenn Sie keine
            Nachricht erhalten haben, schauen Sie auch bitte einmal in Ihrem
            Spamordner nach.
          </p>
          <p>
            Falls Sie keine Bestätigung erhalten haben, nehmen Sie bitte Kontakt
            mit mir auf:
            <br />Telefon: 02246 . 31 97 oder per E-Mail:
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </p>
          <p>
            <v-btn depressed color="ichen_blue white--text" @click="confirm"
              >Verstanden</v-btn
            >
          </p>
        </v-alert>

        <v-form v-else ref="form" v-model="valid" class="pt-10">
          <p v-html="$md.render(veranstaltung.Beschreibung)"></p>

          <h3 class="ichen_blue--text text-h2 pb-6">
            <template v-if="available">
              Anmeldeformular
            </template>
            <template v-else>
              Auf Warteliste setzen
            </template>
          </h3>
          <v-text-field
            v-model="anmeldung.name"
            outlined
            :rules="requiredRules"
            required
            label="Vor- und Nachname"
          ></v-text-field>

          <v-text-field
            v-model="anmeldung.email"
            outlined
            :rules="emailRules"
            required
            label="E-Mailadresse"
          ></v-text-field>
          <v-text-field
            v-model="anmeldung.telefonNummer"
            outlined
            :rules="phoneNumberRules"
            label="Telefonnummer"
          ></v-text-field>
          <v-text-field v-model="anmeldung.strasseHausnummer" outlined>
            <template v-slot:label>
              <div>
                <div>Straße und Hausnummer</div>
                <small>(optional)</small>
              </div>
            </template>
          </v-text-field>
          <v-text-field v-model="anmeldung.plzOrt" outlined>
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
          <v-alert text type="info" class="font-weight-bold">
            <template v-if="available">
              <p>
                Es sind noch Plätze frei!
              </p>
              <p>
                Ihr Platz ist erst mit Zahlungseingang reserviert.
              </p>
            </template>
            <template v-else>
              <p>
                Aktuell sind alle Plätze belegt. Für den Fall, dass doch noch
                ein Platz frei wird, können Sie sich hier auf die Warteliste
                setzen.
              </p>
              <p>
                Sobald ein Platz frei wird, melde ich mich bei Ihnen telefonisch
                oder per E-Mail.
              </p>
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
    requiredRules: [(v) => !!v || 'muss ausgefüllt werden'],
    phoneNumberRules: [
      (v) => !!v || 'muss ausgefüllt werden',
      (v) =>
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(v) ||
        'muss gültig sein',
    ],
    emailRules: [
      (v) => !!v || 'muss ausgefüllt werden',
      (v) => /.+@.+\..+/.test(v) || 'muss gültig sein',
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
