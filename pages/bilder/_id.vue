<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pb-12" flat>
          <p align="right" class="px-6 pt-6">
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
          </p>
          <h2 class="text-center ichen_blue--text text-h2 pt-0 pb-3">
            {{ bilderstrecke.titel }}
          </h2>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="bild in bilderstrecke.bilder"
              :key="bild.id"
              contain
              :src="bild.url"
              :srcset="bild | generateSrcset"
              sizes="
          (min-width:1904px) 1761px,
          (min-width:1264px) 1161px,
          (min-width:960px) 876px,
          100vw"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
export default {
  async asyncData({ $graphql, params }) {
    const query = gql`
      query bilderstrecke($id: ID!) {
        bilderstrecke(where: {id: $id}) {
          id
          bilder {
            id
            width
            url
            thumbnail: url(transformation: {image: {resize: {width: 250}}})
            small: url(transformation: {image: {resize: {width: 500}}})
            medium: url(transformation: {image: {resize: {width: 750}}})
            large: url(transformation: {image: {resize: {width: 1000}}})
          }
        }
      }
    `
    const { bilderstrecke } = await $graphql.default.request(query, params);
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
