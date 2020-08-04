<template>
  <v-col id="veranstaltung" xs="12" sm="6" md="4">
    <v-card rounded="0" flat class="veranstaltung-tile">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="'/../api' + veranstaltung.Vorschaubild.url"
      ></v-img>
      <v-card-title>{{ veranstaltung.Titel }}</v-card-title>
      <v-card-text class="text--primary pb-0">
        <div class="veranstaltungen_details">
          <ul>
            <li>{{ veranstaltung.Datum | formatDate }}</li>

            <li>{{ veranstaltung.Beschreibung }}</li>

            <li>{{ veranstaltung.Preis }} Euro</li>
          </ul>
          <p>
            <strong>still free places</strong>
          </p>
        </div>
      </v-card-text>

      <!-- condition if there are free places or not => either show button "anmelden" or show botton "warteliste" 
      <div class="goToBooking">
        <div v-if="freePlaces > 1">
          <v-card-actions>
            <v-btn color="orange" text>Anmelden</v-btn>
          </v-card-actions>
        </div>
        <div v-else>
          <v-card-actions>
            <v-btn color="orange" text>Auf Warteliste setzten</v-btn>
          </v-card-actions>
        </div>
      </div>
      -->

      <div>
        <v-card-actions class="pt-6 pb-8 pr-4">
          <nuxt-link to="/anmelden/{ id: { id: 1 }}">
            <v-btn depressed color="red">Anmelden</v-btn>
          </nuxt-link>
        </v-card-actions>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    rawDate: new Date(20124, 0, 11),
  }),
}
</script>

<style lang="scss">
div.veranstaltungen_details {
  ul {
    display: block;
    list-style: none;
    text-indent: 0;
    padding: 0;
    li {
      padding: 0.5em 0;
      margin: 0;
    }
  }
  p {
    margin: 1em 0 0 0;
    text-align: right;
  }
}

.v-card__actions {
  justify-content: flex-end;
}
</style>
