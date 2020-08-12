<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <v-img src="/header_images/header_leather.jpg" alt="werkhof ichen: Eine Auswahl von Leder" />
      </v-col>
    </v-row>
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
        <v-card rounded="0" flat class="ichen_beige">
          <v-card-title>Media</v-card-title>
          <v-card-text>
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>
