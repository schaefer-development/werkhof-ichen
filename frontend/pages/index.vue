<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat>
          <v-img class="align-end" aspect-ratio="1" src="/werkhof_01.jpg"></v-img>

          <v-card-title class="text-h2">
            <nuxt-link to="/ueber_mich/werkhof" class="ichen_blue--text">werkhof ichen</nuxt-link>
          </v-card-title>

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
              <v-btn dark nuxt to="/ueber_mich/werkhof" depressed color="ichen_red">Mehr</v-btn>
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
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat dark class="ichen_green">
          <v-img aspect-ratio="1" src="/leather_trouser.jpg"></v-img>

          <v-card-title class="text-h2">
            <nuxt-link to="/anfertigungen/leder" class="ichen_blue--text">Anfertigungen</nuxt-link>
          </v-card-title>

          <v-card-text>
            <p>
              Meine Kollektionen sind zeitlose, individuelle Entwicklungen, die
              nur bedingt den Trends des Modemarktes unterworfen sind.
            </p>
            <p>
              Neben verschiedenen Textilien verarbeite ich gerne Leder –
              beispielsweise Lederhosen und -jacken.
            </p>
            <div class="text-right pb-3">
              <v-btn nuxt to="/anfertigungen/leder" depressed color="ichen_red">Mehr</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat dark class="ichen_blue">
          <v-img class="align-end" aspect-ratio="1" src="/kid_sewing.jpg"></v-img>

          <v-card-title class="text-h2">
            <nuxt-link to="/veranstaltungen" class="ichen_yellow--text">Veranstaltungen</nuxt-link>
          </v-card-title>

          <v-card-text v-if="veranstaltungen">
            <veranstaltung-short-list :veranstaltungen="veranstaltungen"></veranstaltung-short-list>
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
