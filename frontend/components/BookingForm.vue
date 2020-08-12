<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="veranstaltung.Vorschaubild.url"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="ichen_beige">
          <div v-if="success" class="pt-8 pr-3 pb-2 pl-3">
            <v-card-title>Vielen Dank für Ihre Anmeldung</v-card-title>
            <v-card-text>
              <p>
                <strong
                  >{{ veranstaltung.Titel }} am
                  {{ veranstaltung.Datum | formatDate }} Uhr</strong
                >
              </p>
              <p>
                Sie erhalten in den nächsten Minuten eine Bestätigung Ihrer
                Anmeldung mit allen weiteren Details per E-Mail. Wenn Sie keine
                Nachricht erhalten haben, schauen Sie auch bitte einmal in Ihrem
                Spamordner nach.
              </p>
              <p>
                Falls Sie keine Bestätigung erhalten haben, nehmen Sie bitte
                Kontakt mit mir auf:
                <br />Telefon: 02246 . 31 97 oder per E-Mail:
                <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
              </p>
            </v-card-text>
          </div>

          <div v-else class="pl-3 pr-3">
            <v-card-actions class="pt-8 pb-8">
              <nuxt-link :to="'/veranstaltungen/' + veranstaltung.Kategorie">
                <v-btn depressed small color="ichen_blue white--text"
                  >Abbrechen</v-btn
                >
              </nuxt-link>
            </v-card-actions>
            <hr />
            <br />
            <v-card-title>{{ veranstaltung.Titel }}</v-card-title>
            <v-card-text>
              <p>
                <strong>{{ veranstaltung.Datum | formatDate }} Uhr</strong>
              </p>
              <p>{{ veranstaltung.Beschreibung }}</p>
              <p>{{ veranstaltung.Preis }} Euro</p>

              <v-form ref="form" v-model="valid" class="pt-4 pb-12">
                <v-text-field
                  v-model="booking.name"
                  outlined
                  :rules="requiredRules"
                  required
                >
                  <template v-slot:label>
                    <div class="jos_label">Vor- und Nachname</div>
                  </template>
                </v-text-field>

                <v-text-field
                  v-model="booking.email_adresse"
                  outlined
                  :rules="emailRules"
                  required
                >
                  <template v-slot:label>
                    <div class="jos_label">E-Mailadresse</div>
                  </template>
                </v-text-field>
                <v-text-field
                  v-model="booking.telefon_nummer"
                  outlined
                  :rules="requiredRules"
                >
                  <template v-slot:label>
                    <div class="jos_label">Telefonnummer</div>

                    <div>Telefonnummer</div>
                  </template>
                </v-text-field>
                <v-text-field v-model="booking.strasse_hausnummer" outlined>
                  <template v-slot:label>
                    <div>
                      <div class="jos_label">Straße und Hausnummer</div>
                      <small>(optional)</small>
                    </div>
                  </template>
                </v-text-field>
                <v-text-field v-model="booking.plz_ort" outlined>
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
                        <nuxt-link to="/anfertigungen/leder">AGB</nuxt-link
                        >&nbsp;gelesen und akzeptiere sie
                      </div>
                    </div>
                  </template>
                </v-checkbox>
                <p class="booking_info pb-6">
                  <v-icon color="#2a434c">mdi-alert-circle</v-icon>&nbsp;Ihr
                  Platz ist erst mit Zahlungseingang reserviert.
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
                <nuxt-link :to="'/veranstaltungen/' + veranstaltung.Kategorie">
                  <v-btn depressed small color="ichen_blue white--text"
                    >Abbrechen</v-btn
                  >
                </nuxt-link>
              </v-form>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    valid: true,
    booking: {
      name: '',
      email_adresse: '',
      telefon_nummer: '',
      plz_ort: '',
      strasse_hausnummer: '',
    },
    agb: false,
    requiredRules: [(v) => !!v || 'muss ausgefüllt werden'],
    emailRules: [
      (v) => !!v || 'muss ausgefüllt werden',
      (v) => /.+@.+\..+/.test(v) || 'muss gültig sein',
    ],
    agbRules: [(v) => !!v || 'Sie müssen den AGB zustimmen, um fortzufahren'],
    success: false,
    loading: false,
  }),
  methods: {
    async submit() {
      this.loading = true
      const { booking } = this
      booking.veranstaltung = this.veranstaltung
      await this.$axios.$post('/buchungs/', {
        ...booking,
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

p.booking_info {
  color: #2a434c;
  font-weight: bold;
}
</style>
