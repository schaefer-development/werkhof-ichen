<template>
  <div id="registration-form">
    <template v-if="success">
      <h2 class="pb-6">Erfolgreich angemeldet</h2>
      <p>
        Sie erhalten in den nächsten Minuten eine Bestätigung Ihrer Anmeldung
        mit allen weiteren Details per E-Mail. Wenn Sie keine Nachricht erhalten
        haben, schauen Sie auch bitte einmal in Ihrem Spamordner nach.
      </p>
      <p>
        Falls Sie keine Bestätigung erhalten haben, nehmen Sie bitte Kontakt mit
        mir auf:
        <br />Telefon: 02246 . 31 97 oder per E-Mail:
        <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
      </p>
      <p>
        <v-btn depressed color="ichen_blue white--text" @click="confirm"
          >Verstanden</v-btn
        >
      </p>
    </template>

    <v-form v-else ref="form" v-model="valid">
      <h2 class="pb-6">Anmeldeformular</h2>
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
              <nuxt-link to="/agb">AGB</nuxt-link>&nbsp;und die Informationen
              zum
              <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>&nbsp;gelesen
              und stimme beiden zu.
            </div>
          </div>
        </template>
      </v-checkbox>
      <v-alert text type="info" class="font-weight-bold">
        <template v-if="available"
          >Ihr Platz ist erst mit Zahlungseingang reserviert.</template
        >
        <template v-else>
          Sobald ein Platz frei wird, melde ich mich bei Ihnen telefonisch oder
          per E-Mail.
        </template>
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
      <v-btn depressed color="ichen_blue white--text" @click="cancel"
        >Abbrechen</v-btn
      >
    </v-form>
  </div>
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
      await this.$axios.$post('/anmeldungs/', {
        ...anmeldung,
      })
      this.loading = false
      this.success = true
      this.$vuetify.goTo('#registration-form', { duration: 1500 })
    },
  },
}
</script>
