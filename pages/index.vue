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
            <v-alert
              rounded="0"
              outlined
              type="info"
              class="ichen_yellow--text"
            >
              <h3>HURRA, Kurse dürfen wieder stattfinden</h3>
            </v-alert>
             <p class="white--text">
              Durch die aktuelle positive Entwicklung der
              Corona-Infektionszahlen darf ich wieder Kurse in meinen
              Räumlichkeiten anbieten.
              <br />
              BITTE BEACHTEN SIE DIE HYGIENEAUFLAGEN wie negativer Coronatest
              oder 2-facher Impfnachweis bzw. Immunitätsnachweis. Außerdem
              besteht eine FFP2-Maskenpflicht.
              <br />
              Falls Änderungen auftreten sollten, werde ich Sie als Teilnehmer
              umgehend informieren.
            </p>

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
            <v-img
              class="shortlist_divider py-8 mx-auto"
              src="/sewing_needle_beige.svg"
              alt="Nähnaht"
              contain
              justify="center"
              width="100%"
              max-width="400px"
            />
            <veranstaltung-short-list
              :veranstaltungen="veranstaltungen"
            ></veranstaltung-short-list>

            <v-img
              class="shortlist_divider py-8 mx-auto"
              src="/sewing_needle_beige.svg"
              alt="Nähnaht"
              contain
              justify="center"
              width="100%"
              max-width="400px"
            />

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
      veranstaltungen(orderBy: datum_ASC, where: {datum_lt: $today}) {
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
        vorschaubild {
          url
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
