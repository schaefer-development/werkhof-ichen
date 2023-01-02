<template>
  <v-container>
    <v-row no-gutters align="center" class="ichen_green">
      <v-col cols="12" xs="12" sm="3" md="3" lg="2" xl="2" class="pa-6">
        <v-btn
          large
          depressed
          class="white--text"
          color="ichen_red"
          @click="$vuetify.goTo('#termine')"
          >Termine</v-btn
        >
      </v-col>
      <v-col cols="12" xs="12" sm="9" md="3" lg="2" xl="2" class="pa-6">
        <v-btn
          large
          depressed
          class="white--text"
          color="ichen_red"
          @click="$vuetify.goTo('#nach_absprache')"
          >Nach Terminabsprache</v-btn
        >
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        offset-md="2"
        lg="5"
        offset-lg="3"
        xl="5"
        align="center"
        class="pa-4 select_filter"
      >
        <v-select
          v-model="selected"
          filled
          :items="items"
          item-text="name"
          item-value="key"
          label="NACH KATEGORIE FILTERN"
          hide-details
          clearable
          background-color="ichen_beige"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-row class="ichen_blue pa-6 mx-1 mt-12 mb-0" align="center">
          <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
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
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-row class="ichen_blue pa-6 mx-1 mt-12 mb-12" align="center">
          <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3" align="center">
            <v-img
              class="rounded-circle"
              max-height="200px"
              max-width="200px"
              src="/kinder_helfen_kindern.jpg"
              alt="Kindern helfen Kindern | werkhof ichen"
              aspect-ratio="1"
            />
          </v-col>

          <v-col
            align="left"
            cols="12"
            xs="12"
            sm="9"
            md="9"
            lg="9"
            xl="9"
            class="ichen_beige--text"
          >
            <h2 class="ichen_beige--text text-h2">
              Kinder helfen Kinder in Not
            </h2>
            <p>
              Neben den eigentlichen Projekten während des Nähkurses, haben die
              Kinder die Möglichkeit, an einer Patchworkdecke zu arbeiten. Wenn
              diese fertig gestellt ist, wird sie auf dem Weihnachtsmarkt in
              Breidt verlost. Bisher kamen die Erlöse Kinder-Projekten von DON
              BOSKO zugute.
            </p>

            <p>
              <strong>Mehr erfahren:</strong>
              <v-btn
                icon
                link
                target="_blank"
                rel="noopener"
                color="ichen_beige"
                aria-label="Kinder helfen Kindern in Not | Facebook"
                href="https://www.facebook.com/Kinder-helfen-Kindern-in-Not-530384737049120/"
              >
                <v-icon size="30" medium>mdi-facebook</v-icon>
              </v-btn>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row id="termine">
      <v-col cols="12">
        <h2 class="ichen_green ichen_blue--text text-h2 pa-6">Termine</h2>
      </v-col>
      <template v-if="filtered.veranstaltungen.length">
        <veranstaltung-tile
          v-for="veranstaltung in filtered.veranstaltungen"
          :key="veranstaltung.id"
          :veranstaltung="veranstaltung"
        ></veranstaltung-tile>
      </template>
      <template v-else>
        <v-col cols="12">
          <v-alert outlined type="info" class="font-weight-bold"
            >Zu diesen Kategorien gibt es keine anstehenden
            Veranstaltungen.</v-alert
          >
        </v-col>
      </template>
    </v-row>
    <v-row id="nach_absprache" class="pt-12">
      <v-col cols="12" class="mt-12">
        <h2 class="ichen_green ichen_blue--text text-h2 pa-6">
          Nach Terminabsprache
        </h2>
      </v-col>
      <template v-if="filtered.terminabsprachen.length">
        <terminabsprache-tile
          v-for="terminabsprache in filtered.terminabsprachen"
          :key="terminabsprache.id"
          :terminabsprache="terminabsprache"
        ></terminabsprache-tile>
      </template>
      <template v-else>
        <v-col cols="12">
          <v-alert outlined type="info" class="font-weight-bold">
            Zu dieser Kategorie gibt es aktuell keine Angebote mit
            Terminabsprache.
          </v-alert>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import VeranstaltungTile from '~/components/VeranstaltungTile.vue'
import TerminabspracheTile from '~/components/TerminabspracheTile.vue'
import { gql } from 'nuxt-graphql-request';

export default {
  components: {
    VeranstaltungTile,
    TerminabspracheTile,
  },
  async asyncData({ $graphql }) {
    const query = gql`
      query veranstaltungenUndTerminabsprachen($today: DateTime) {
        terminabsprachen {
          id
          titel
          beschreibung {
            text
          }
          dauerUndPreis
          vorschaubild {
            width
            url
            thumbnail: url(transformation: {image: {resize: {width: 250}}})
            small: url(transformation: {image: {resize: {width: 500}}})
            medium: url(transformation: {image: {resize: {width: 750}}})
            large: url(transformation: {image: {resize: {width: 1000}}})
          }
        }
        veranstaltungen(orderBy: datum_ASC, where: {datum_lt: $today}) {
          id
          titel
          datum
          preis
          maximaleAnzahlTeilnehmer
          beschreibung {
            text
          }
          anzeigedatum
          kurzbeschreibung
          vorschaubild {
            url
          }
        }
      }
    `
    const today = new Date().toISOString()
    const { veranstaltungen, terminabsprachen } = await $graphql.default.request(query, { today });
    const items = [
      { key: 'kurse_fuer_erwachsene', name: 'Kurse für Erwachsene' },
      {
        key: 'kurse_fuer_kinder_und_jugendliche',
        name: 'Kurse für Kinder und Jugendliche',
      },
      { key: 'geburtstagsevents', name: 'Geburtstagsevents' },
      { key: 'unkategorisiert', name: 'Unkategorisiert' },
    ]
    return { veranstaltungen, terminabsprachen, items, selected: [] }
  },
  computed: {
    filtered() {
      const { selected, veranstaltungen, terminabsprachen } = this
      if (!selected || !selected.length)
        return { veranstaltungen, terminabsprachen }
      return {
        veranstaltungen: veranstaltungen.filter((v) =>
          selected.includes(v.Kategorie)
        ),
        terminabsprachen: terminabsprachen.filter((v) =>
          selected.includes(v.Kategorie)
        ),
      }
    },
  },
  head() {
    return {
      title: ' | Veranstaltungen',
    }
  },
}
</script>

<style lang="scss">
.v-text-field .v-input__control .v-input__slot:after,
.select_filter .v-input .v-input__control .v-input__slot:before {
  border: none !important;
}

.select_filter {
  label {
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 0.05em;
  }
}

.menuable__content__active {
  // dropdown select categories
  box-shadow: none !important;
  .v-list {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    background-color: $ichen_blue;
    .v-list-item {
      &:hover {
        background-color: $ichen_blue_dark !important;
      }
      .v-list-item__content {
        color: white !important;
        padding-top: 1em;
        padding-bottom: 1em;
      }
    }
  }
}
</style>
