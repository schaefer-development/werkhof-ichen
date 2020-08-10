<template>
  <v-container>
    <v-row>
      <veranstaltung-tile
        v-for="veranstaltung in veranstaltungs"
        :key="veranstaltung.id"
        :veranstaltung="veranstaltung"
      ></veranstaltung-tile>
    </v-row>
  </v-container>
</template>

<script>
import VeranstaltungTile from '../../components/VeranstaltungTile.vue'

export default {
  components: {
    VeranstaltungTile,
  },
  async asyncData(context) {
    const veranstaltungs = await context.$axios.$get('/api/veranstaltungs', {
      params: {
        Kategorie: 'kurse_fuer_erwachsene'
      },
    })
    return { veranstaltungs }
  },
}
</script>
