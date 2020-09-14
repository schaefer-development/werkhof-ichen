<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          contain
          aspect-ratio="1"
          :src="veranstaltung.Vorschaubild.url"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="px-6 pt-8">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="ichen_blue--text text-h2">{{
                veranstaltung.Titel
              }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
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
            </v-list-item-action>
          </v-list-item>
          <v-card-text>
            <p>
              <strong>{{ veranstaltung.Datum | formatDate }} Uhr</strong>
            </p>
            <p>
              <strong>{{ veranstaltung.Preis }} Euro</strong>
            </p>

            <p v-html="$md.render(veranstaltung.Beschreibung)"></p>
          </v-card-text>

          <p align="center" class="py-6 ma-0">
            <v-img
              class="shortlist_divider"
              src="/sewing_needle_brown.svg"
              alt="Nähnaht"
              max-width="500px"
            />
          </p>
          <v-card-text>
            <registration-form
              v-if="displayForm"
              :veranstaltung="veranstaltung"
              @cancel="toggleRegistration"
              @confirm="cancel"
            ></registration-form>
            <template v-else>
              <v-alert
                v-if="available"
                text
                type="success"
                class="font-weight-bold"
                >Es sind noch Plätze frei!</v-alert
              >
              <v-alert
                v-else
                text
                flat
                type="info"
                icon="mdi-alert-circle"
                class="font-weight-bold"
              >
                Aktuell sind alle Plätze belegt. Aber für den Fall, dass doch
                noch ein Platz frei wird, können Sie sich hier auf die
                Warteliste setzen.
              </v-alert>
              <v-btn
                depressed
                color="ichen_red white--text"
                @click="toggleRegistration"
                >{{ available ? 'Zur Anmeldung' : 'Zur Warteliste' }}</v-btn
              >
              <v-btn depressed color="ichen_blue white--text" @click="cancel"
                >Zurück</v-btn
              >
            </template>
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
  data() {
    return {
      displayForm: false,
    }
  },
  computed: {
    available() {
      return isAvailable(this.veranstaltung)
    },
  },
  methods: {
    toggleRegistration() {
      this.displayForm = !this.displayForm
    },
    cancel() {
      this.$router.back()
    },
  },
}
</script>
