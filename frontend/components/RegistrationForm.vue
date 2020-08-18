<template>
  <v-card v-if="success" rounded="0" light flat class="px-6 pt-8">
    <v-card-title>Vielen Dank für Ihre Anmeldung</v-card-title>
    <v-card-text>
      <p>
        <strong>
          {{ veranstaltung.Titel }} am
          {{ veranstaltung.Datum | formatDate }} Uhr
        </strong>
      </p>
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
    </v-card-text>
  </v-card>
  <v-card v-else rounded="0" flat class="px-6 pt-8">
    <v-toolbar flat extended>
      <v-toolbar-title>
        {{ veranstaltung.Titel }}
        <div class="subheading">
          <small>{{ veranstaltung.Datum | formatDate }} Uhr</small>
        </div>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="cancel">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text>
      <availability :veranstaltung="veranstaltung"></availability>
      <p>{{ veranstaltung.Beschreibung }}</p>
      <p>{{ veranstaltung.Preis }} Euro</p>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="anmeldung.name"
          outlined
          :rules="requiredRules"
          required
        >
          <template v-slot:label>
            <div class="jos_label">Vor- und Nachname</div>
          </template>
        </v-text-field>

        <v-text-field
          v-model="anmeldung.email"
          outlined
          :rules="emailRules"
          required
        >
          <template v-slot:label>
            <div class="jos_label">E-Mailadresse</div>
          </template>
        </v-text-field>
        <v-text-field
          v-model="anmeldung.telefonNummer"
          outlined
          :rules="phoneNumberRules"
        >
          <template v-slot:label>
            <div class="jos_label">Telefonnummer</div>

            <div>Telefonnummer</div>
          </template>
        </v-text-field>
        <v-text-field v-model="anmeldung.strasseHausnummer" outlined>
          <template v-slot:label>
            <div>
              <div class="jos_label">Straße und Hausnummer</div>
              <small>(optional)</small>
            </div>
          </template>
        </v-text-field>
        <v-text-field v-model="anmeldung.plzOrt" outlined>
          <template v-slot:label>
            <div>
              <div class="jos_label">Postleitzahl und Ort</div>
              <small>(optional)</small>
            </div>
          </template>
        </v-text-field>
        <v-checkbox v-model="agb" :rules="agbRules" required>
          <template v-slot:label>
            <div>
              <div class="jos_label">
                Ich habe die
                <nuxt-link to="/agb">AGB</nuxt-link>&nbsp;gelesen und akzeptiere
                sie
              </div>
            </div>
          </template>
        </v-checkbox>
        <p>
          <strong class="ichen_blue--text">
            <v-icon color="ichen_blue">mdi-alert-circle</v-icon>&nbsp;Ihr Platz
            ist erst mit Zahlungseingang reserviert.
          </strong>
        </p>
        <v-btn
          class="mr-4"
          depressed
          small
          color="ichen_red white--text"
          :disabled="!valid"
          :loading="loading"
          @click="submit"
          >Anmelden</v-btn
        >
        <v-btn depressed small color="ichen_blue white--text" @click="cancel"
          >Abbrechen</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Availability from '~/components/Availability'

export default {
  components: {
    Availability,
  },
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
  methods: {
    cancel() {
      this.$router.back()
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
    },
  },
}
</script>

<style lang="scss" scoped>
.v-text-field--outlined {
  border-radius: 0px !important;
}

.v-text-field__slot > label {
  color: red !important;
}

.jos_label {
  font-size: 14px;
}

.v-text-field input {
  font-size: 2em !important;
}
</style>
