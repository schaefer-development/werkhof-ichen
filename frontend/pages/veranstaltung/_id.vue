<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          contain
          aspect-ratio="1"
          :src="veranstaltung.Vorschaubild.url"
          :srcset="veranstaltung.Vorschaubild | generateSrcset"
          :sizes="veranstaltung.Vorschaubild | generateSizes"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="px-0 pt-8">
          <p class="text-right pr-3">
            <v-btn
              fab
              depressed
              small
              dark
              aria-label="Abbrechen"
              color="ichen_blue"
              @click="back"
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
            <p v-html="$md.render(veranstaltung.Beschreibung)"></p>

            <registration-form
              :veranstaltung="veranstaltung"
              @cancel="back"
              @confirm="back"
            ></registration-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegistrationForm from '~/components/RegistrationForm'
import isAvailable from '~/helpers/isAvailable'

export default {
  components: {
    RegistrationForm,
  },
  async asyncData(context) {
    const veranstaltung = await context.$axios.$get(
      '/veranstaltungs/' + context.params.id
    )
    return { veranstaltung }
  },
  computed: {
    available() {
      return isAvailable(this.veranstaltung)
    },
  },
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>
