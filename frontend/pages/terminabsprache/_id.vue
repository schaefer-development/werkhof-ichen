<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          contain
          aspect-ratio="1"
          :src="terminabsprache.Vorschaubild.url"
          :srcset="terminabsprache.Vorschaubild | generateSrcset"
          :sizes="terminabsprache.Vorschaubild | generateSizes"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="px-0 pt-8">
          <p class="text-right pr-3">
            <v-btn
              fab
              depressed
              small
              dark
              aria-label="Abbrechen"
              color="ichen_blue"
              @click="cancel"
            >
              <v-icon dark>mdi-close</v-icon>
            </v-btn>
          </p>
          <v-card-title class="ichen_blue--text text-h2">{{
            terminabsprache.Titel
          }}</v-card-title>
          <v-card-text>
            <p class="ichen_brown--text">
              <strong
                >{{ terminabsprache.Preis }} Euro plus Materialkosten</strong
              >
            </p>
            <span v-html="$md.render(terminabsprache.Beschreibung)"></span>
            <p class="pt-6">
              <v-alert text type="info" class="font-weight-bold">
                Veranstaltungsangebote werden stets individuell vereinbart.
                Kontaktieren Sie mich gerne für eine unverbindliche Auskunft.
              </v-alert>
            </p>

            <p class="py-6">
              Telefon:
              <a href="tel:+4922463197">02246 . 31 97</a>
              <br />Fax: 02246 . 94 94 090 <br />E-Mail:
              <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
            </p>
            <v-btn depressed color="ichen_blue white--text" @click="cancel"
              >Zurück</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(context) {
    const terminabsprache = await context.$axios.$get(
      '/terminabspraches/' + context.params.id
    )
    return { terminabsprache }
  },
  methods: {
    cancel() {
      this.$router.back()
    },
  },
}
</script>
