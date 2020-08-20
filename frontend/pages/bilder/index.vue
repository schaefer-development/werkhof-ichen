<template>
  <v-container>
    <v-row class="align-baseline">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        offset-md="4"
        md="8"
        offset-lg="4"
        lg="8"
        offset-xl="4"
        xl="8"
      >
        <v-card
          v-for="bilderstrecke in bilderstrecken"
          :key="bilderstrecke.id"
          nuxt
          :to="{ name: 'bilder-id', params: { id: bilderstrecke.id } }"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="bilderstrecke.Bilder[0].url"
          ></v-img>
          <v-card-title>{{ bilderstrecke.Titel }}</v-card-title>
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
