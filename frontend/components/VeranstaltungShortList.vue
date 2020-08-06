<template>
  <li class="shortlist_item">
    <v-row paddless>
      <v-col xs="12" sm="12" md="6">
        <strong>{{ veranstaltung.Titel }}</strong>
        <br />
        {{ veranstaltung.Datum | formatDate }}
      </v-col>
      <v-col xs="12" sm="12" md="6" align="right">
        <nuxt-link :to="{ name: 'anmelden-id', params: { id: veranstaltung.id } }">
          <v-btn depressed color="ichen_red white--text">Anmelden</v-btn>
        </nuxt-link>
      </v-col>
    </v-row>

    <br />
    <v-img class="shortlist_divider" src="/shortlist_divider.svg" alt="Nähnaht" max-width="400px" />
  </li>
</template>

<script>
export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
li.shortlist_item {
  padding: 0.75em 0;
  color: #fff;
  div {
    // image
    padding: 0;
    margin: 0 0 0 0;
  }
}
</style>
