<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="ichen_beige">
          <v-img class="white--text align-end" height="250px" src="/werkhof.jpg"></v-img>
          <v-card-title>werkhof ichen</v-card-title>
          <v-card-text class="text--primary">
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
          <div class="sloping_edge">
            <div class="ichen_beige"></div>
          </div>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="ichen_green">
          <v-img class="white--text align-end" height="250px" src="/anfertigungen.jpg"></v-img>
          <v-card-title>Anfertigungen</v-card-title>
          <v-card-text class="white--text">
            Meine Kollektionen sind zeitlose, individuelle Entwicklungen, die
            nur bedingt den Trends des Modemarktes unterworfen sind.
          </v-card-text>

          <div class="sloping_edge">
            <div class="ichen_green"></div>
          </div>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="ichen_blue">
          <v-img class="white--text align-end" height="250px" src="/veranstaltungen.jpg"></v-img>
          <v-card-title class="ichen_beige--text">Veranstaltungen</v-card-title>
          <v-card-text class="text--primary">
            <ul class="shortlist">
              <veranstaltung-short-list
                v-for="veranstaltung in veranstaltungs"
                :key="veranstaltung.id"
                :veranstaltung="veranstaltung"
              ></veranstaltung-short-list>
            </ul>
          </v-card-text>

          <div class="sloping_edge">
            <div class="ichen_blue"></div>
          </div>
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
    const veranstaltungs = await $axios.$get('/api/veranstaltungs', {
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

<style lang="scss" scoped>
.sloping_edge {
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: -30px;
  overflow: hidden;
  div {
    position: relative;
    background-color: inherit;
    width: 101%;
    border: none;
    display: inline-block;
    height: 28px;

    transform-origin: bottom left;
    -ms-transform: skew(0, -4deg);
    -webkit-transform: skew(0, -4deg);
    transform: skew(0, -4deg);
  }
}

ul.shortlist {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
