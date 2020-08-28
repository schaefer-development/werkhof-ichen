<template>
  <v-container>
    <v-banner sticky class="ichen_beige pt-6 px-4">
      <v-row>
        <v-col>
          <v-btn
            nuxt
            to="#veranstaltungen"
            large
            depressed
            class="white--text"
            color="ichen_red"
            >Termine</v-btn
          >
          <v-btn
            nuxt
            to="#veranstaltungsangebote"
            large
            depressed
            class="white--text"
            color="ichen_red"
            >Angebote</v-btn
          >
        </v-col>

        <v-col>
          <v-select
            v-model="selected"
            clearable
            outlined
            dense
            :items="items"
            item-text="name"
            item-value="key"
            hint="Nach Kategorie filtern"
            persistent-hint
            @change="change"
          ></v-select>
        </v-col>
      </v-row>
    </v-banner>
    <v-row id="veranstaltungen">
      <v-col cols="12">
        <h1>Veranstaltungstermine</h1>
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
            Zu diesen Kategorien gibt es keine anstehenden Veranstaltungen
          </v-alert>
        </v-col>
      </template>
    </v-row>
    <v-row id="veranstaltungsangebote">
      <v-col cols="12">
        <h1>Veranstaltungsangebote</h1>
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
    return { veranstaltungen, veranstaltungsangebote }
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
    filtered() {
      const { veranstaltungen, veranstaltungsangebote } = this
      const categories = this.$route.query.Kategorie_in
      if (!categories) return { veranstaltungen, veranstaltungsangebote }
      return {
        veranstaltungen: veranstaltungen.filter((v) =>
          categories.includes(v.Kategorie)
        ),
        veranstaltungsangebote: veranstaltungsangebote.filter((v) =>
          categories.includes(v.Kategorie)
        ),
      }
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
