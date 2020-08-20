<template>
  <v-container>
    <v-row>
      <v-col
        v-for="bilderstrecke in bilderstrecken"
        :key="bilderstrecke.id"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card
          nuxt
          :to="{ name: 'bilder-id', params: { id: bilderstrecke.id } }"
          class="no_sloping_edge"
          rounded="0"
          flat
        >
          <v-img
            aspect-ratio="1"
            class="white--text align-end"
            :src="bilderstrecke.Bilder[0].url"
            gradient="to top, rgba(0,0,0,.3), rgba(0,0,0,0)"
          >
            <div class="fill-height bottom-gradient"></div>
            <v-card-title class="text-h2">{{
              bilderstrecke.Titel
            }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(context) {
    const bilderstrecken = await context.$axios.$get('/bilderstreckes/')
    return { bilderstrecken }
  },
}
</script>

<style lang="scss" scoped>
.no_sloping_edge {
  margin-bottom: 0em !important;
  &:after {
    display: none !important;
  }
  div div .v-card__title {
    color: #fff !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}
</style>
