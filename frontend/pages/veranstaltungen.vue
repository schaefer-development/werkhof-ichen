<template>
  <v-container>
    <v-row v-if="!veranstaltungen.length" justify="center">
      <v-alert outlined type="info" class="font-weight-bold">
        Es stehen momentan keine Veranstaltungen an
      </v-alert>
    </v-row>
    <client-only v-else placeholder="Wird geladen...">
      <v-row>
        <v-col>
          <v-select
            v-model="selected"
            outlined
            deletable-chips
            :items="items"
            item-text="name"
            item-value="key"
            multiple
            chips
            hint="Nur Veranstaltung dieser Kategorien anzeigen"
            persistent-hint
            @change="change"
          ></v-select>
        </v-col>
      </v-row>
      <v-row v-if="!gefilterteVeranstaltungen.length" justify="center">
        <v-alert outlined type="info" class="font-weight-bold">
          Zu diesen Kategorien gibt es gerade keine anstehenden Veranstaltungen
        </v-alert>
      </v-row>
      <v-row v-else>
        <veranstaltung-tile
          v-for="veranstaltung in gefilterteVeranstaltungen"
          :key="veranstaltung.id"
          :veranstaltung="veranstaltung"
        ></veranstaltung-tile>
      </v-row>
    </client-only>
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
        Datum_gte: new Date(),
      },
    })
    return { veranstaltungen }
  },
  data() {
    const selectedCategories = this.$route.query.Kategorie_in || []
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
      selected: items.filter((i) => selectedCategories.includes(i.key)),
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
