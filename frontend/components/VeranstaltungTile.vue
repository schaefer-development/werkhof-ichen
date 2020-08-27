<template>
  <v-col xs="12" sm="6" lg="4">
    <v-card rounded="0" flat>
      <v-img class="white--text align-end" height="200px" :src="veranstaltung.Vorschaubild.url"></v-img>
      <v-card-title class="ichen_blue--text text-h2">
        {{
        veranstaltung.Titel
        }}
      </v-card-title>
      <v-card-text>
        <p>
          <strong>{{ veranstaltung.Datum | formatDate }} Uhr</strong>
        </p>
        <p v-html="$md.render(veranstaltung.Beschreibung)"></p>
        <p>{{ veranstaltung.Preis }} Euro</p>
      </v-card-text>
      <v-card-text>
        <template v-if="available">
          <strong class="success--text">
            <v-icon color="success" class="pr-1">mdi-check-circle</v-icon>Noch Plätze frei
          </strong>
        </template>
        <template v-else>
          <strong class="ichen_blue--text">
            <v-icon color="ichen_blue" class="pr-1">mdi-alert-circle</v-icon>Leider ausgebucht
          </strong>
        </template>
      </v-card-text>

      <v-card-actions class="pt-1 pb-8 pr-4">
        <v-btn
          nuxt
          depressed
          color="ichen_red white--text"
          :to="{ name: 'veranstaltung-id', params: { id: veranstaltung.id } }"
        >{{ available ? 'Anmelden' : 'Warteliste' }}</v-btn>
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
