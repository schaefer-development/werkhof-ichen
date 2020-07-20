<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Startseite</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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