<template>
  <v-col cols="12" xs="12" sm="6" lg="4">
    <v-card rounded="0" flat>
      <v-img
        class="white--text align-end"
        contain
        aspect-ratio="1"
        :src="veranstaltung.Vorschaubild.url"
        :srcset="veranstaltung.Vorschaubild | generateSrcset"
      ></v-img>
      <v-card-title class="ichen_blue--text text-h2 pt-6">{{ veranstaltung.Titel }}</v-card-title>
      <v-card-text>
        <client-only>
          <div
            class="event_detail ichen_brown--text font-weight-bold"
            v-html="$md.render(veranstaltung.Anzeigedatum)"
          ></div>

          <div
            class="event_detail ichen_brown--text font-weight-bold"
          >{{ veranstaltung.Preis }} € (plus Materialkosten)</div>

          <v-img
            class="shortlist_divider py-6 mx-auto"
            src="/sewing_needle_brown.svg"
            alt="Nähnaht"
            contain
            justify="center"
            width="95%"
            max-width="300px"
          />
          <p>{{ veranstaltung.Kurzbeschreibung }}</p>
        </client-only>
      </v-card-text>

      <v-card-actions class="px-4">
        <v-btn
          nuxt
          depressed
          color="ichen_red white--text"
          :to="{
            name: 'veranstaltung-id',
            params: { id: veranstaltung.id },
            hash: '#registration-form',
          }"
        >Mehr</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import isAvailable from '~/helpers/isAvailable'

export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
  computed: {
    available() {
      return isAvailable(this.veranstaltung)
    },
  },
}
</script>

<style lang="scss">
div.anzeigedatum {
  padding-bottom: 1em;
  p {
    margin-bottom: 0;
  }
}
</style>
