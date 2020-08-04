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
  async asyncData({ $axios }) {
    const veranstaltungs = await $axios.$get('/api/veranstaltungs')
    return { veranstaltungs }
  },
}
</script>
