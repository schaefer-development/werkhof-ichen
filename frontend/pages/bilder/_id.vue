<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="end">
        <v-btn fab depressed small aria-label="Abbrechen" color="ichen_blue" nuxt to="/bilder">
          <v-icon dark class="white--text">mdi-close</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="end">
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="Bild in bilderstrecke.Bilder" :key="Bild.id" :src="Bild.url"></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <v-list-item-title class="text-h2">{{ bilderstrecke.Titel }}</v-list-item-title>
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
