<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="selected"
          deletable-chips
          :items="items"
          item-text="name"
          item-value="key"
          multiple
          chips
          item-color="ichen_beige"
          hint="Nur Veranstaltung dieser Kategorien anzeigen"
          persistent-hint
          @change="change"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <veranstaltung-tile
        v-for="veranstaltung in gefilterteVeranstaltungen"
        :key="veranstaltung.id"
        :veranstaltung="veranstaltung"
      ></veranstaltung-tile>
    </v-row>
  </v-container>
</template>

<script>
import VeranstaltungTile from '~/components/VeranstaltungTile.vue'

export default {
  components: {
    VeranstaltungTile,
  },
  async asyncData(context) {
    const veranstaltungen = await context.$axios.$get('/veranstaltungs', {
      params: {
        _sort: 'Datum:ASC',
        // Datum_gte: new Date(), TODO: sollen wir nur buchbare Veranstaltungen anzeigen?
      },
    })
    return { veranstaltungen }
  },
  data() {
    const items = [
      { key: 'kurse_fuer_erwachsene', name: 'Kurse für Erwachsene' },
      {
        key: 'kurse_fuer_kinder_und_jugendliche',
        name: 'Kurse für Kinder und Jugendliche',
      },
      { key: 'geburtstagsevents', name: 'Geburtstagsevents' },
      { key: 'unkategorisiert', name: 'Unkategorisiert' },
    ]
    return {
      selected: items,
      items,
    }
  },
  computed: {
    gefilterteVeranstaltungen() {
      const categories = this.$route.query.Kategorie_in
      if (!categories) return this.veranstaltungen
      return this.veranstaltungen.filter((v) =>
        categories.includes(v.Kategorie)
      )
    },
  },
  methods: {
    change(categories) {
      this.$router.push({
        path: this.$route.path,
        query: { Kategorie_in: categories },
      })
    },
  },
}
</script>
