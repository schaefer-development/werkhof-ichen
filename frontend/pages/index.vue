<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="4">
          <v-card rounded="0" flat class="beige sloping_edge" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/footer_images/kater_schroeder.jpg"
            ></v-img>
            <v-card-title>werkhof ichen</v-card-title>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col xs="12" sm="12" md="4">
          <v-card rounded="0" flat class="green sloping_edge" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/footer_images/kater_schroeder.jpg"
            ></v-img>
            <v-card-title>Anfertigungen</v-card-title>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col xs="12" sm="12" md="4">
          <v-card rounded="0" flat class="blue sloping_edge" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/footer_images/kater_schroeder.jpg"
            ></v-img>
            <v-card-title>Veranstaltungen</v-card-title>
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


<style lang="scss" scoped>
.sloping_edge {
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    border: 1px solid red;
    display: block;

    border: 0% 100% 0% 100% / 0% 0% 100% 100%;
  }
}
</style>