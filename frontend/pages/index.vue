<template>
  <v-layout column justify-center align-center>
    <h1>startseite</h1>

    <v-flex xs12 sm8 md6>
      <seminar-tile v-for="seminar in seminars" :key="seminar.id" :seminar="seminar"></seminar-tile>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos ex veniam dolorem accusantium minima explicabo excepturi eveniet nam maxime beatae nesciunt quaerat corrupti sunt tenetur necessitatibus, pariatur laudantium. Neque!</p>
    </v-flex>
  </v-layout>
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


<style scoped>
</style>