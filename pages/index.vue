<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat>
          <v-img
            class="align-end"
            aspect-ratio="1"
            src="/werkhof_01.jpg"
            alt="werkhof ichen in Lohmar Breidt"
          ></v-img>
          <v-card-title class="text-h2">
            <nuxt-link to="/werkhof" class="ichen_blue--text"
              >werkhof ichen</nuxt-link
            >
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
            <div>
              <v-btn dark nuxt to="/werkhof" depressed color="ichen_red"
                >Mehr</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat dark class="ichen_green">
          <v-img
            aspect-ratio="1"
            src="/leather_trouser_02.jpg"
            alt="Lederhosen genäht von ichen Schmitz"
          ></v-img>

          <v-card-title class="text-h2">
            <nuxt-link to="/anfertigungen/leder" class="ichen_blue--text"
              >Anfertigungen</nuxt-link
            >
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
            <div>
              <v-btn nuxt to="/anfertigungen/leder" depressed color="ichen_red"
                >Mehr</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat dark class="ichen_blue">
          <v-img
            class="align-end"
            aspect-ratio="1"
            src="/sew_detail.jpg"
            alt="Nähen im werkhof ichen"
          ></v-img>
          <v-card-title class="text-h2">
            <nuxt-link to="/veranstaltungen" class="ichen_yellow--text"
              >Veranstaltungen</nuxt-link
            >
          </v-card-title>
          <v-card-text v-if="veranstaltungen">
 


            <!-- <v-alert
              rounded="0"
              outlined
              type="info"
              class="ichen_yellow--text"
            >
              <h3>Coronabedingt keine Veranstaltungen</h3>
            </v-alert>

            <p>
               Zur Eindämmung der Corona-Pandemie dürfen in der Zeit vom 2.11.2020
              bis 30.6.2021 meine Kurse leider nicht stattfinden.
              <br />Ich hoffe sehr, dass danach wieder ein
              entspannter Kursbetrieb möglich sein wird. Alle Teilnehmenden
              informiere ich persönlich (in der Regel per E-Mail) darüber, ob
              und ggf. wie ihr Kurs dann fortgesetzt werden kann. Die Gebühr für
              Kurstage, die letztlich endgültig ausfallen, erstatte ich Ihnen
              selbstverständlich. <br />Bis dahin <br />ichen
              <br />
            </p>-->
            <div class="w-full max-w-[400px] h-12 py-12 mx-auto flex items-center justify-center">
                <img src="/sewing_needle_beige.svg" alt="Nähnadel" />
              </div>
            <veranstaltung-short-list
              :veranstaltungen="veranstaltungen"
            ></veranstaltung-short-list>




            <div class="pb-12">
              <v-btn
                nuxt
                to="/veranstaltungen"
                depressed
                color="ichen_red white--text"
                >Alle anzeigen</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
import VeranstaltungShortList from '../components/VeranstaltungShortList.vue'
export default {
  components: {
    VeranstaltungShortList,
  },
  async asyncData({ $graphql }) {
    const query = gql`
    query veranstaltungen($today: DateTime) {
      veranstaltungen(orderBy: datum_ASC, where: {datum_gt: $today}, first: 3) {
        id
        titel
        datum
        preis
        maximaleAnzahlTeilnehmer
        beschreibung {
          html
        }
        anzeigedatum
        kurzbeschreibung
        kategorie
        vorschaubild {
          width
          url
          thumbnail: url(transformation: {image: {resize: {width: 250}}})
          small: url(transformation: {image: {resize: {width: 500}}})
          medium: url(transformation: {image: {resize: {width: 750}}})
          large: url(transformation: {image: {resize: {width: 1000}}})
        }
        anmeldungen {
          id
        }
      }
    }
    `
    const today = new Date().toISOString()
    const { veranstaltungen } = await $graphql.default.request(query, { today });
    return { veranstaltungen }
  },
  head() {
    return {
      title: ' | Hallo',
    }
  },
}
</script>
