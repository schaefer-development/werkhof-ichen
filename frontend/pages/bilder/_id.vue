<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat>
          <v-list-item class="pa-6">
            <v-list-item-content></v-list-item-content>
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
          <h2 class="text-center ichen_blue--text text-h2 py-6">
            {{ bilderstrecke.Titel }}
          </h2>
          <!--
          <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="Bild in bilderstrecke.Bilder" :key="Bild.id">
              <v-sheet>
                <v-row class="fill-height" align="center" justify="center">
                  <v-img :src="Bild.url"></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel-->

          <v-carousel
            hide-delimiter-background
            hide-delimiters="true"
            height="100%"
            max-height="500px"
          >
            <v-carousel-item
              v-for="Bild in bilderstrecke.Bilder"
              :key="Bild.id"
              height="100%"
              max-height="500px"
              reverse-transition="fade-transition"
              transition="fade-transition"
              contain
              :src="Bild.url"
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
