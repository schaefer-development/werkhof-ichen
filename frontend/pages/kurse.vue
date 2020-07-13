<template>
  <v-layout column justify-center align-center>
    <seminar-tile v-for="seminar in seminars" :key="seminar.id" :seminar="seminar"></seminar-tile>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>sdfsdfsdf</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>Share</v-btn>

        <v-btn color="orange" text>Explore</v-btn>
      </v-card-actions>
    </v-card>
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
