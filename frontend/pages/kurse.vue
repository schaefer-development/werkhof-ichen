<template>
  <v-container>
    <v-row>
      <seminar-tile v-for="seminar in seminars" :key="seminar.id" :seminar="seminar"></seminar-tile>
    </v-row>
  </v-container>
</template>

<script>
import SeminarTile from '../components/SeminarTile.vue'

export default {
  components: {
    SeminarTile,
  },
  async asyncData({ $axios }) {
    const seminars = await $axios.$get('/api/seminars')
    return { seminars }
  },
}
</script>
