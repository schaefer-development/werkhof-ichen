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
        <v-card rounded="0" flat class="px-6 pt-8">
          <v-toolbar flat extended color="transparent">
            <v-toolbar-title>
              <h1>{{ veranstaltung.Titel }}</h1>
              <div class="subheading">
                <small>{{ veranstaltung.Datum | formatDate }} Uhr</small>
              </div>
            </v-toolbar-title>
            <v-spacer />
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
          </v-toolbar>
          <v-card-text>
            <registration-form
              v-if="displayForm"
              :veranstaltung="veranstaltung"
              @cancel="toggleRegistration"
              @confirm="cancel"
            >
            </registration-form>
            <template v-else>
              <p>{{ veranstaltung.Beschreibung }}</p>
              <p>{{ veranstaltung.Preis }} Euro</p>
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
                type="info"
                icon="mdi-alert-circle"
                class="font-weight-bold"
                >Es gibt keine freien Plätze mehr. Sie können sich aber auf die
                Warteliste setzen.</v-alert
              >
              <v-btn
                depressed
                color="ichen_red white--text"
                @click="toggleRegistration"
              >
                {{ available ? 'Zur Anmeldung' : 'Zur Warteliste' }}
              </v-btn>
              <v-btn depressed color="ichen_blue white--text" @click="cancel">
                Zurück
              </v-btn>
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
