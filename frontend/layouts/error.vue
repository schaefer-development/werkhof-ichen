<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <v-img
          src="/header_images/header_ghosts.jpg"
          alt="werkhof ichen: Andere Textilien"
          class="mb-5 mr-3 ml-3"
        />
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="8"
        offset-sm="4"
        md="8"
        offset-md="4"
        lg="8"
        offset-lg="4"
        xl="8"
        offset-xl="4"
      >
        <v-card rounded="0" flat class="ichen_beige">
          <v-card-title v-if="error.statusCode === 404">{{
            pageNotFound
          }}</v-card-title>
          <v-card-title v-else>{{ otherError }}</v-card-title>
          <v-card-text>
            <p>Ups ... Da ist was schiefgelaufen.</p>
            <p>
              Möchten Sie zurück zur
              <NuxtLink to="/">Startseite</NuxtLink>?
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Fehler 404 – Seite nicht gefunden',
      otherError: 'Ein Fehler ist aufgetreten',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
