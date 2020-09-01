<template>
  <v-container>
    <v-row class="ichen_green px-4" align="center">
      <v-col>
        <v-btn
          nuxt
          to="#veranstaltungen"
          large
          depressed
          class="white--text"
          color="ichen_red"
        >Termine</v-btn>

        <v-btn
          nuxt
          to="#veranstaltungsangebote"
          large
          depressed
          class="white--text"
          color="ichen_red"
        >Angebote</v-btn>
      </v-col>

      <v-col class="select_filter">
        <v-select
          v-model="selected"
          outlined
          :items="items"
          item-text="name"
          item-value="key"
          label="NACH KATEGORIE FILTERN"
          class="pt-6"
        ></v-select>
      </v-col>
    </v-row>

    <v-row id="veranstaltungen">
      <v-col cols="12" class="mt-12">
        <h2 class="text-h2">VERANSTALTUNGSTERMINE</h2>
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
          <v-alert
            outlined
            type="info"
            class="font-weight-bold"
          >Zu diesen Kategorien gibt es keine anstehenden Veranstaltungen</v-alert>
        </v-col>
      </template>
    </v-row>
    <v-row id="veranstaltungsangebote" class="pt-12">
      <v-col cols="12" class="pt-12">
        <h2 class="text-h2">VERANSTALTUNGSTERMINE</h2>
      </v-col>
      <angebot-tile
        v-for="veranstaltung in filtered.veranstaltungsangebote"
        :key="veranstaltung.id"
        :veranstaltung="veranstaltung"
      ></angebot-tile>
    </v-row>
  </v-container>
</template>

<script>
import VeranstaltungTile from '~/components/VeranstaltungTile.vue'
import AngebotTile from '~/components/AngebotTile.vue'

export default {
  components: {
    VeranstaltungTile,
    AngebotTile,
  },
  async asyncData(context) {
    const [veranstaltungen, veranstaltungsangebote] = await Promise.all([
      context.$axios.$get('/veranstaltungs', {
        params: {
          _sort: 'Datum:ASC',
          Datum_gte: new Date(),
        },
      }),
      context.$axios.$get('/veranstaltungsangebots'),
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
    return { veranstaltungen, veranstaltungsangebote, items, selected: [] }
  },
  computed: {
    filtered() {
      const { selected, veranstaltungen, veranstaltungsangebote } = this
      if (!selected.length) return { veranstaltungen, veranstaltungsangebote }
      return {
        veranstaltungen: veranstaltungen.filter((v) =>
          selected.includes(v.Kategorie)
        ),
        veranstaltungsangebote: veranstaltungsangebote.filter((v) =>
          selected.includes(v.Kategorie)
        ),
      }
    },
  },





  
}
</script>


<style lang="scss">
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