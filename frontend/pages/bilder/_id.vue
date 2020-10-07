<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pb-12" flat>
          <v-list-item class="px-6 pt-6">
            <v-list-item-action>
              <v-btn
                fab
                depressed
                small
                aria-label="Abbrechen"
                color="ichen_blue"
                nuxt
                to="/bilder"
              >
                <v-icon dark class="white--text">mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <br />
          <h2 class="text-center ichen_blue--text text-h2 py-3">
            {{ bilderstrecke.Titel }}
          </h2>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="Bild in bilderstrecke.Bilder"
              :key="Bild.id"
              contain
              :src="Bild.url"
              sizes="
          (min-width:1904px) 570px,
          (min-width:1264px) 371px,
          (min-width:960px) 426px,
          (min-width:600px) 50vw,
          100vw"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(context) {
    const bilderstrecke = await context.$axios.$get(
      '/bilderstreckes/' + context.params.id
    )
    return { bilderstrecke }
  },
  head() {
    return {
      title: ' | Bilder',
    }
  },
}
</script>

<style lang="scss">
.carousel_item {
  div {
    .v-image__image {
      background-size: contain !important;
    }
  }
}
</style>
