<template>
  <v-container>
    <v-row>
      <v-col
        v-for="bilderstrecke in bilderstrecken"
        :key="bilderstrecke.id"
        cols="12"
        sm="6"
        lg="3"
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
            gradient="to top, rgba(30, 48, 54,.75), rgba(57, 91, 102,0) 50%"
            :src="bilderstrecke.bilder[0].url"
            :srcset="bilderstrecke.bilder[0] | generateSrcset"
            sizes="
          (min-width:1904px) 570px,
          (min-width:1264px) 371px,
          (min-width:960px) 276px,
          (min-width:600px) 33vw,
          100vw"
          >
            <div class="fill-height bottom-gradient"></div>
            <v-card-title class="text-h2 px-6 py-0">{{
              bilderstrecke.titel
            }}</v-card-title>
            <v-icon dark size="40" class="white--text px-6 pb-6"
              >mdi-arrow-right</v-icon
            >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
export default {
  async asyncData({ $graphql }) {
    const query = gql`
      query bilderstrecken {
        bilderstrecken {
          id
          titel
          bilder(first: 1) {
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
    const { bilderstrecken } = await $graphql.default.request(query)
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
