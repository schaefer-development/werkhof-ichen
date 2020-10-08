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
            gradient="to top, rgba(30, 48, 54,.75), rgba(57, 91, 102,0) 50%"
            :srcset="bilderstrecke.Bilder[0] | generateSrcset"
            sizes="
          (min-width:1904px) 570px,
          (min-width:1264px) 371px,
          (min-width:960px) 276px,
          (min-width:600px) 33vw,
          100vw"
          >
            <div class="fill-height bottom-gradient"></div>
            <v-card-title class="text-h2 px-6 py-0">{{ bilderstrecke.Titel }}</v-card-title>
            <v-icon dark size="40" class="white--text px-6 pb-6">mdi-arrow-right</v-icon>
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
  head() {
    return {
      title: ' | Bilder',
    }
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
  }
}
</style>
