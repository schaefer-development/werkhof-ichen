<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="'/../api' + veranstaltung.Vorschaubild.url"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="ichen_beige">
          <v-card-actions class="pa-7">
            <nuxt-link :to="'/veranstaltungen/' + veranstaltung.Kategorie">
              <v-btn depressed small color="ichen_blue white--text">Abbrechen</v-btn>
            </nuxt-link>
          </v-card-actions>

          <hr />
          <br />
          <v-card-title class="pl-7 pr-7">
            ANMELDUNG
            <br />
            <br />
            {{ veranstaltung.Titel }}
          </v-card-title>
          <v-card-text class="text--primary pl-7 pr-7">
            <div class="veranstaltungen_details">
              <ul>
                <li>
                  <strong>{{ veranstaltung.Datum | formatDate }} Uhr</strong>
                </li>

                <li>{{ veranstaltung.Beschreibung }}</li>

                <li>{{ veranstaltung.Preis }} Euro</li>
              </ul>
            </div>
            <div></div>
          </v-card-text>
          <div v-if="success">
            <h1>Hat geklappt!</h1>
          </div>
          <v-form v-else ref="form" v-model="valid" class="pt-4 pr-6 pb-12 pl-6">
            <v-text-field
              v-model="name"
              outlined
              :rules="requiredRules"
              label="Vor- und Nachname"
              required
            ></v-text-field>
            <v-text-field
              v-model="email_adresse"
              outlined
              :rules="emailRules"
              label="E-Mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="telefon_nummer"
              outlined
              :rules="requiredRules"
              label="Telefonnummer"
            ></v-text-field>
            <v-text-field v-model="strasse_hausnummer" outlined>
              <template v-slot:label>
                <div>
                  Straße und Hausnummer
                  <small>(optional)</small>
                </div>
              </template>
            </v-text-field>
            <v-text-field v-model="plz_ort" outlined>
              <template v-slot:label>
                <div>
                  Postleitzahl und Ort
                  <small>(optional)</small>
                </div>
              </template>
            </v-text-field>
            <v-checkbox
              v-model="agb"
              :rules="agbRules"
              label="Ich habe die AGB gelesen und akzeptiere sie"
              required
            ></v-checkbox>
            <p class="booking_info pb-6">
              <v-icon color="#2a434c">mdi-alert-circle</v-icon>&nbsp;Ihr Platz ist
              erst mit Zahlungseingang reserviert.
            </p>

            <v-btn
              class="mr-4"
              depressed
              small
              color="ichen_red white--text"
              :disabled="!valid"
              @click="submit"
            >Buchen</v-btn>
            <nuxt-link :to="'/veranstaltungen/' + veranstaltung.Kategorie">
              <v-btn depressed small color="ichen_blue white--text">Abbrechen</v-btn>
            </nuxt-link>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(context) {
    const veranstaltung = await context.$axios.$get(
      '/api/veranstaltungs/' + context.params.id
    )
    return { veranstaltung }
  },

  data: () => ({
    valid: true,
    name: '',
    email_adresse: '',
    telefon_nummer: '',
    plz_ort: '',
    strasse_hausnummer: '',
    agb: false,
    requiredRules: [(v) => !!v || 'muss ausgefüllt werden'],
    emailRules: [
      (v) => !!v || 'muss ausgefüllt werden',
      (v) => /.+@.+\..+/.test(v) || 'muss gültig sein',
    ],
    agbRules: [(v) => !!v || 'Sie müssen den AGB zustimmen, um fortzufahren'],
    success: false,
  }),
  methods: {
    async submit() {
      // eslint-disable-next-line
      const { name, email_adresse, telefon_nummer, plz_ort, strasse_hausnummer, veranstaltung } = this
      await this.$axios.$post('/api/buchungs/', {
        name,
        email_adresse,
        telefon_nummer,
        plz_ort,
        strasse_hausnummer,
        veranstaltung,
      })
      this.success = true
    },
  },
}
</script>

<style lang="scss">
.v-text-field--outlined {
  border-radius: 0px !important;
}

p.booking_info {
  color: #2a434c;
  font-weight: bold;
}
</style>
