<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat>
          <v-img
            class="white--text align-end"
            height="250px"
            src="/werkhof_01.jpg"
          ></v-img>
          <v-card-title>werkhof ichen</v-card-title>
          <v-card-text>
            <p>
              Der „werkhof ichen“ ist ein stilvoll ausgebautes Fachwerkgehöft am
              Rande des bergischen Landes.
            </p>
            <p>
              Ein großzügiges Platzangebot bietet der Kursraum für verschiedene
              Kurse und Veranstaltungen in einer anregenden Atmosphäre.
            </p>

            <div class="text-right pb-10">
              <v-btn
                nuxt
                to="/ueber_mich/werkhof"
                depressed
                color="ichen_red white--text"
                >Mehr</v-btn
              >
            </div>

            <v-alert rounded="0" outlined type="info">
              <h3>Veranstaltungen können wieder stattfinden.</h3>
            </v-alert>
            <p>
              Bitte beachten Sie die Hinweise bezüglich der Hygienevorschriften
              etc. im Rahmen der Corona Pandemie.
              <br />Bei grippeähnlichen Symptomen oder wenn es in Ihrem
              persönlichen Umfeld einen bestätigten Infektionsfall mit Covid 19
              (Coronavirus-Sars-Cov2) gibt, bitte ich Sie von einer
              Kursteilnahme abzusehen.
            </p>
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
            <p>
              Meine Kollektionen sind zeitlose, individuelle Entwicklungen, die
              nur bedingt den Trends des Modemarktes unterworfen sind.
            </p>
            <p>
              Neben verschiedenen Textilien verarbeite ich gerne Leder –
              beispielsweise Lederhosen und -jacken.
            </p>
            <div class="text-right pb-3">
              <v-btn
                nuxt
                to="/anfertigungen/leder"
                depressed
                color="ichen_red white--text"
                >Mehr</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card nuxt to="/veranstaltungen" rounded="0" flat class="ichen_blue">
          <v-img
            class="white--text align-end"
            height="250px"
            src="/kid_sewing.jpg"
          ></v-img>
          <v-card-title class="ichen_yellow--text"
            >Veranstaltungen</v-card-title
          >
          <v-card-text v-if="veranstaltungen" class="text--primary">
            <veranstaltung-short-list
              :veranstaltungen="veranstaltungen"
            ></veranstaltung-short-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VeranstaltungShortList from '../components/VeranstaltungShortList.vue'

export default {
  components: {
    VeranstaltungShortList,
  },
  async asyncData({ $axios }) {
    const veranstaltungen = await $axios.$get('/veranstaltungs', {
      params: {
        _sort: 'Datum:ASC',
        _limit: 3,
        Datum_gte: new Date(),
      },
    })
    return { veranstaltungen }
  },
}
</script>
