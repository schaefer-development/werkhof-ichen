<template>
  <v-col cols="12" xs="12" sm="6" lg="4">
    <v-card rounded="0" flat>
      <v-img
        class="white--text align-end"
        contain
        aspect-ratio="1"
        :src="veranstaltung.Vorschaubild.url"
        :srcset="veranstaltung.Vorschaubild | generateSrcset"
        :sizes="veranstaltung.Vorschaubild | generateSizes"
      ></v-img>
      <v-card-title class="ichen_blue--text text-h2 pt-3">
        {{ veranstaltung.Titel }}
      </v-card-title>
      <v-card-text>
        <client-only>
          <ul class="booking_details pt-3 pb-1">
            <li>
              <div
                class="font-weight-bold ichen_blue--text"
                v-html="$md.render(veranstaltung.Anzeigedatum)"
              ></div>
            </li>
            <li>
              <div class="font-weight-bold ichen_blue--text pt-3">
                {{ veranstaltung.Preis }} € (plus Materialkosten)
              </div>
            </li>
          </ul>

          <v-img
            class="shortlist_divider py-6 mx-auto"
            src="/sewing_needle_brown.svg"
            alt="Nähnaht"
            contain
            justify="center"
            width="95%"
            max-width="300px"
          />
          <div v-html="$md.render(veranstaltung.Beschreibung)"></div>
        </client-only>
      </v-card-text>

      <v-card-text align="right">
        <template v-if="available">
          <strong class="success--text">
            <v-icon color="success" class="pr-1">mdi-check-circle</v-icon>Noch
            Plätze frei
          </strong>
        </template>
        <template v-else>
          <strong class="ichen_blue--text">
            <v-icon color="ichen_blue" class="pr-1">mdi-alert-circle</v-icon
            >Leider ausgebucht
          </strong>
        </template>
      </v-card-text>

      <v-card-actions class="pt-1 pb-8 pr-4">
        <v-btn
          nuxt
          depressed
          color="ichen_red white--text"
          :to="{ name: 'veranstaltung-id', params: { id: veranstaltung.id } }"
          >{{ available ? 'Anmelden' : 'Warteliste' }}</v-btn
        >
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
.v-card__actions {
  justify-content: flex-end;
}
</style>
