<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card rounded="0" flat>
          <v-card-title class="pb-1">
            {{ bilderstrecke.Titel }}
            <v-spacer></v-spacer>
            <v-btn
              fab
              depressed
              small
              dark
              aria-label="Abbrechen"
              color="ichen_blue"
              nuxt
              to="/bilder"
            >
              <v-icon dark>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="Bild in bilderstrecke.Bilder"
                :key="Bild.id"
                :src="Bild.url"
              ></v-carousel-item>
            </v-carousel>
          </v-card-text>
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
