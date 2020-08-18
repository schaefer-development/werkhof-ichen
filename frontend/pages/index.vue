<template>
  <v-container>
    <client-only>
      <v-row>
        <v-col xs="12" sm="6" md="4">
          <v-card rounded="0" flat>
            <v-img
              class="white--text align-end"
              height="250px"
              src="/werkhof.jpg"
            ></v-img>
            <v-card-title>werkhof ichen</v-card-title>
            <v-card-text>
              <p>
                Im werkhof ichen werden Kurse im künstlerischen Handwerk
                veranstaltet.
              </p>
              <p>
                Außerdem finden Sie hier die ichen Kollektion, maßgefertigte
                Kleidung und eine erlesene Auswahl an Stoffen und Nähutensilien.
              </p>
              <p>Ich freue mich auf Ihren Kontakt.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6" md="4">
          <v-card rounded="0" flat class="ichen_green">
            <v-img
              class="white--text align-end"
              height="250px"
              src="/leather_trouser.jpg"
            ></v-img>
            <v-card-title>Anfertigungen</v-card-title>
            <v-card-text class="white--text">
              Meine Kollektionen sind zeitlose, individuelle Entwicklungen, die
              nur bedingt den Trends des Modemarktes unterworfen sind.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6" md="4">
          <v-card
            nuxt
            to="/veranstaltungen"
            rounded="0"
            flat
            class="ichen_blue"
          >
            <v-img
              class="white--text align-end"
              height="250px"
              src="/kid_sewing.jpg"
            ></v-img>
            <v-card-title class="ichen_yellow--text"
              >Veranstaltungen</v-card-title
            >
            <v-card-text class="text--primary">
              <veranstaltung-short-list
                :veranstaltungen="veranstaltungs"
              ></veranstaltung-short-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </client-only>
  </v-container>
</template>

<script>
import VeranstaltungShortList from '../components/VeranstaltungShortList.vue'

export default {
  components: {
    VeranstaltungShortList,
  },
  async asyncData({ $axios }) {
    const veranstaltungs = await $axios.$get('/veranstaltungs', {
      params: {
        _sort: 'Datum:ASC',
        _limit: 3,
        Datum_gte: new Date(),
      },
    })
    return { veranstaltungs }
  },
}
</script>
