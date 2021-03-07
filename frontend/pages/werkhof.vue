<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <v-img
          src="/header_images/header_werkhof_inside.jpg"
          alt="Der werkhof ichen in Breidt"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-img src="/entry_01.jpg" alt="Eingang zum werkhof ichen" />
        <br />
        <v-img src="/tea_time.jpg" alt="Tea time" />
        <br />
        <v-img src="/ribbons.jpg" alt="Stoffbänder" />
        <br />
        <v-img src="/anfertigungen.jpg" alt="werkhof ichen Anfertigungen" />
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="ichen_beige">
          <v-card-title class="text-h2">werkhof ichen</v-card-title>
          <v-card-text v-if="veranstaltungen">
            <p>
              Der werkhof ichen ist ein zum Teil denkmalgeschütztes und stilvoll
              ausgebautes Fachwerkgehöft am Rande des bergischen Landes. In
              diesem einladenden Ambiente werden Kurse im künstlerischen
              Handwerk angeboten. Der Kursraum bietet ein großzügiges
              Platzangebot für verschiedene Kurse und Veranstaltungen .
            </p>
            <p>
              Das gemeinsame Arbeiten, die Begegnung mit dem Material und das
              menschliche Miteinander finden in einer anregenden und entspannten
              Atmosphäre statt.
            </p>
            <p>
              So erfährt der Teilnehmer nicht nur die fachkundige Unterstützung
              der Kursleiterin, sondern hat auch Gelegenheit zum produktiven
              Austausch mit Gleichgesinnten.
            </p>
            <p>
              Hier kann sich jeder einzelne Teilnehmer so ausbreiten, daß selbst
              in „Coronazeiten“ mehr als der geforderte Abstand zum benachbarten
              Arbeitsplatz gewährleistet wird.
            </p>
            <p>
              In der Werkstatt werden nach den Wünschen der Kunden Unikate aus
              hochwertigen Stoffen/Ledern und Papier hergestellt und die eigene
              Kollektion erweitert.
            </p>
            <p>
              Für Kinder, die den WALDKINDERGARTEN besuchen, entstehen z.B.
              Kinderlederhosen und vieles andere mehr.
            </p>
            <p>Sie sind herzlich eingeladen.</p>
            <p>
              Wenn Sie Fragen haben, kontaktieren Sie mich gerne:
              <br />Telefon:
              <a href="tel:+4922463197">02246 . 31 97</a>
              <br />E-Mail:
              <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card rounded="0" flat dark class="ichen_blue">
          <v-card-title class="text-h2 ichen_yellow--text"
            >Veranstaltungen</v-card-title
          >

          <v-card-text v-if="veranstaltungen">
            <v-alert
              rounded="0"
              outlined
              type="info"
              class="ichen_yellow--text"
            >
              <h3>Coronabedingt keine Veranstaltungen</h3>
            </v-alert>

            <p>
             Zur Eindämmung der Corona-Pandemie dürfen in der Zeit vom 2.11.2020
              bis 28.3.2021 meine Kurse leider nicht stattfinden.
              <br />Ich hoffe sehr, dass danach wieder ein
              entspannter Kursbetrieb möglich sein wird. Alle Teilnehmenden
              informiere ich persönlich (in der Regel per E-Mail) darüber, ob
              und ggf. wie ihr Kurs dann fortgesetzt werden kann. Die Gebühr für
              Kurstage, die letztlich endgültig ausfallen, erstatte ich Ihnen
              selbstverständlich. <br />Bis dahin <br />ichen
              <br />
            </p>
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
            <div class="text-right pb-12">
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
  head() {
    return {
      title: ' | Der Werkhof',
    }
  },
}
</script>
