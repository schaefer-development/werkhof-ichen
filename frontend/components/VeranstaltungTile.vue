<template>
  <v-col id="veranstaltung" xs="12" sm="6" md="4">
    <v-card rounded="0" flat>
      <v-img
        class="white--text align-end"
        height="200px"
        :src="veranstaltung.Vorschaubild.url"
      ></v-img>
      <v-card-title class="text-h2">{{ veranstaltung.Titel }}</v-card-title>
      <v-card-text class="text--primary pb-0">
        <div class="veranstaltungen_details">
          <p>
            <strong>{{ veranstaltung.Datum | formatDate }} Uhr</strong>
          </p>
          <p>{{ veranstaltung.Beschreibung }}</p>
          <p>{{ veranstaltung.Preis }} Euro</p>
        </div>
        <template v-if="available">
          <strong class="success--text">
            <v-icon color="success">mdi-check-circle</v-icon>noch Plätze frei
          </strong>
        </template>
        <template v-else>
          <strong>
            <v-icon color="ichen_blue">mdi-alert-circle</v-icon>ausgebucht
          </strong>
        </template>
      </v-card-text>

      <v-card-actions class="pt-6 pb-8 pr-4">
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
