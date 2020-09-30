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
        >Termine</v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="9" md="3" lg="2" xl="2" class="pa-6">
        <v-btn
          large
          depressed
          class="white--text"
          color="ichen_red"
          @click="$vuetify.goTo('#nach_absprache')"
        >Nach Terminabsprache</v-btn>
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
        <v-row class="ichen_blue pa-6 mx-1 mt-12 mb-12" align="center">
          <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3" align="center">
            <v-img
              src="/kinder_helfen_kindern.jpg"
              alt="Kindern helfen Kindern | Werkhof ichen"
              aspect-ratio="1"
              max-height="200px"
              max-width="200px"
              class="round_image"
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
            <h2 class="ichen_beige--text text-h2">Kinder helfen Kinder in Not</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
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
        <h2 class="ichen_green ichen_blue--text text-h2 pa-6">
          <v-icon size="40" class="ichen_blue--text pr-3">mdi-calendar-month</v-icon>TERMINE
        </h2>
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
          <v-alert outlined type="info" class="font-weight-bold">
            Zu diesen Kategorien gibt es keine anstehenden
            Veranstaltungen
          </v-alert>
        </v-col>
      </template>
    </v-row>
    <v-row id="nach_absprache" class="pt-12">
      <v-col cols="12" class="mt-12">
        <h2 class="ichen_green ichen_blue--text text-h2 pa-6">
          <v-icon size="40" class="ichen_blue--text pr-3">mdi-content-cut</v-icon>NACH TERMINABSPRACHE
        </h2>
      </v-col>
      <terminabsprache-tile
        v-for="veranstaltung in filtered.terminabsprachen"
        :key="veranstaltung.id"
        :veranstaltung="veranstaltung"
      ></terminabsprache-tile>
    </v-row>
  </v-container>
</template>

<script>
import VeranstaltungTile from '~/components/VeranstaltungTile.vue'
import TerminabspracheTile from '~/components/TerminabspracheTile.vue'

export default {
  components: {
    VeranstaltungTile,
    TerminabspracheTile,
  },
  async asyncData(context) {
    const [veranstaltungen, terminabsprachen] = await Promise.all([
      context.$axios.$get('/veranstaltungs', {
        params: {
          _sort: 'Datum:ASC',
          Datum_gte: new Date(),
        },
      }),
      context.$axios.$get('/terminabspraches'),
    ])
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

.round_image {
  border-radius: 50%;
}
</style>
