<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="default">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/footer_images/kater_schroeder.jpg"
          ></v-img>
          <v-card-title>werkhof ichen</v-card-title>
          <v-card-text class="text--primary">
            <div>
              <p>
                Im werkhof ichen werden Kurse im künstlerischen
                Handwerk veranstaltet.
              </p>
              <p>
                Außerdem finden Sie hier die ichen Kollektion,
                maßgefertigte Kleidung und eine erlesene
                Auswahl an Stoffen und Nähutensilien.
              </p>
              <p>Ich freue mich auf Ihren Kontakt.</p>
            </div>
          </v-card-text>

          <div class="sloping_edge">
            <div class="primary"></div>
          </div>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="green">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/footer_images/kater_schroeder.jpg"
          ></v-img>
          <v-card-title>Anfertigungen</v-card-title>
          <v-card-text class="text--primary">
            <div>
              Meine Kollektionen sind zeitlose, individuelle
              Entwicklungen, die nur bedingt den Trends des
              Modemarktes unterworfen sind.
            </div>
          </v-card-text>

          <div class="sloping_edge">
            <div class="green"></div>
          </div>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="blue">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/footer_images/kater_schroeder.jpg"
          ></v-img>
          <v-card-title>Veranstaltungen</v-card-title>
          <v-card-text class="text--primary">
            <div>
              <ul class="shortlist">
                <veranstaltung-short-list
                  v-for="veranstaltung in veranstaltungs"
                  :key="veranstaltung.id"
                  :veranstaltung="veranstaltung"
                ></veranstaltung-short-list>
              </ul>
            </div>
          </v-card-text>

          <v-card-actions class="pa-4">
            <nuxt-link to="#">
              <v-btn depressed color="red">Mehr</v-btn>
            </nuxt-link>
          </v-card-actions>
          <div class="sloping_edge">
            <div class="blue"></div>
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
    const veranstaltungs = await $axios.$get('/api/veranstaltungs')
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