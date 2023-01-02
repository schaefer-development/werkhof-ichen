<template>
  <v-col cols="12" xs="12" sm="6" lg="4">
    <v-card rounded="0" flat>
      <v-img
        class="white--text align-end"
        contain
        aspect-ratio="1"
        :src="veranstaltung.vorschaubild.url"
        :srcset="veranstaltung.vorschaubild | generateSrcset"
        sizes="
          (min-width:1904px) 570px,
          (min-width:1264px) 371px,
          (min-width:960px) 426px,
          (min-width:600px) 50vw,
          100vw"
      ></v-img>



      <div class="w-full border aspect-quare">
        <img src="veranstaltung.vorschaubild.url"></img>
        sdfsdf
      </div>
      <v-card-title class="ichen_blue--text text-h2 pt-6">
        {{ veranstaltung.titel }}
      </v-card-title>
      <v-card-text>
        <client-only>
          <div
            class="event_detail ichen_brown--text font-weight-bold"
            v-html="$md.render(veranstaltung.anzeigedatum)"
          ></div>

          <div class="event_detail ichen_brown--text font-weight-bold pa-0">
            {{ veranstaltung.preis }} € (plus Materialkosten)
          </div>

          <div
            class="w-full max-w-[400px] h-12 py-12 mx-auto flex items-center justify-center"
          >
            <img src="/sewing_needle_brown.svg" alt="Nähnadel" />
          </div>
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
          >Mehr</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import isAvailable from "~/helpers/isAvailable";

export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
  computed: {
    available() {
      return isAvailable(this.veranstaltung);
    },
  },
};
</script>

<style lang="scss">
div.anzeigedatum {
  padding-bottom: 1em;
  p {
    margin-bottom: 0;
  }
}
</style>
