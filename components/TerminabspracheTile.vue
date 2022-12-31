<template>
  <v-col cols="12" xs="12" sm="6" lg="4">
    <v-card rounded="0" flat>
      <v-img
        class="white--text align-end"
        contain
        aspect-ratio="1"
        :src="terminabsprache.vorschaubild.url"
        :srcset="terminabsprache.vorschaubild | generateSrcset"
        sizes="
          (min-width:1904px) 570px,
          (min-width:1264px) 371px,
          (min-width:960px) 426px,
          (min-width:600px) 50vw,
          100vw"
      ></v-img>
      <v-card-title class="ichen_blue--text text-h2 pt-6">{{
        terminabsprache.titel
      }}</v-card-title>
      <v-card-text>
        <client-only>
          <div
            class="event_detail ichen_brown--text font-weight-bold pa-0"
            v-html="$md.render(terminabsprache.dauerUndPreis)"
          ></div>
          <v-img
            class="shortlist_divider py-6 mx-auto"
            src="/sewing_needle_brown.svg"
            alt="Nähnaht"
            contain
            justify="center"
            width="95%"
            max-width="300px"
          />
          <div
            class="pb-3"
            v-html="terminabsprache.beschreibung.html"
          ></div>
        </client-only>

        <v-alert text type="info" class="font-weight-bold">
          Veranstaltungsangebote werden stets individuell vereinbart.
          Kontaktieren Sie mich gerne für eine unverbindliche Auskunft.
        </v-alert>
        <p class="pt-3">
          Telefon:
          <a href="tel:+4922463197">02246 . 31 97</a>
          <br />Fax: 02246 . 94 94 090 <br />E-Mail:
          <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    terminabsprache: {
      type: Object,
      required: true,
    },
  },
}
</script>
