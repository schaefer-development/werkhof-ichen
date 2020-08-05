<template>
  <v-container class="sandbox">
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="'/../api' + veranstaltung.Vorschaubild.url"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <v-card rounded="0" flat color="rgba(214,189,157,0.4)">
          <v-card-actions class="pa-6">
            <nuxt-link :to="'/veranstaltungen/' + veranstaltung.Kategorie">
              <v-btn depressed color="blue">Abbrechen</v-btn>
            </nuxt-link>
          </v-card-actions>
          <hr />
          <v-card-title>{{ veranstaltung.Titel }}</v-card-title>
          <v-card-text class="text--primary">
            <div class="veranstaltungen_details">
              <ul>
                <li>{{ veranstaltung.Datum | formatDate }}</li>

                <li>{{ veranstaltung.Beschreibung }}</li>

                <li>{{ veranstaltung.Preis }} Euro</li>
              </ul>
            </div>
            <div></div>
          </v-card-text>
          <form class="pt-4 pr-4 pb-12 pl-4">
            <v-select
              v-model="select"
              outlined
              flat
              :items="items"
              :error-messages="selectErrors"
              label="Anrede"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
            <v-text-field
              v-model="name"
              outlined
              flat
              :error-messages="nameErrors"
              label="Vorname"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="name"
              outlined
              flat
              :error-messages="nameErrors"
              label="Nachname"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              outlined
              flat
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              outlined
              flat
              :error-messages="phoneErrors"
              label="Telefon"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="street_and_number"
              outlined
              flat
              :error-messages="nameErrors"
              label="Straße und Hausnummer"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="zip"
              outlined
              flat
              :error-messages="nameErrors"
              label="Postleitzahl"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="zip"
              outlined
              flat
              :error-messages="nameErrors"
              label="Ort"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-checkbox
              v-model="checkbox"
              outlined
              flat
              :error-messages="checkboxErrors"
              label="Ich habe die AGB gelesen und akzeptiere sie"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <p class="booking_info">
              <v-icon color="#2a434c">mdi-alert-circle</v-icon>Ihr Platz ist
              erst mit Zahlungseingang reserviert.
            </p>
            <v-btn class="mr-4" depressed color="red" @click="submit"
              >Buchen</v-btn
            >
            <nuxt-link :to="'/veranstaltungen/' + veranstaltung.Kategorie">
              <v-btn depressed color="blue">Abbrechen</v-btn>
            </nuxt-link>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  async asyncData(context) {
    const veranstaltung = await context.$axios.$get(
      '/api/veranstaltungs/' + context.params.id
    )
    return { veranstaltung }
  },

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    zip: '',
    street_and_number: '',
    select: null,
    items: ['Frau', 'Herr'],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked &&
        errors.push('Sie müssen den AGB zustimmen, um fortzufahren ')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Feld ist notwendig')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Feld ist notwendig.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email &&
        errors.push('Muss eine gültige E-Mailadresse sein')
      !this.$v.email.required && errors.push('E-mail ist notwendig')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Telefonnummer ist notwendig')
      !this.$v.name.required && errors.push('Feld ist notwendig.')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<style lang="scss">
p.booking_info {
  color: #2a434c;
  font-weight: bold;
}
</style>
