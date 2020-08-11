<template>
  <li class="shortlist_item">
    <v-row paddless>
      <v-col xs="12" sm="12" md="8">
        <strong>{{ veranstaltung.Titel }}</strong>
        <br />
        {{ veranstaltung.Datum | formatDate }} Uhr
      </v-col>
      <v-col xs="12" sm="12" md="4" align="right">
        <nuxt-link
          :to="{ name: 'anmelden-id', params: { id: veranstaltung.id } }"
        >
          <v-btn depressed small color="ichen_red white--text">Anmelden</v-btn>
        </nuxt-link>
      </v-col>
    </v-row>

    <br />
    <v-img
      class="shortlist_divider"
      src="/shortlist_divider.svg"
      alt="Nähnaht"
      max-width="400px"
    />
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
  &:last-child {
    padding-bottom: 0 !important;
    div.shortlist_divider {
      display: none;
    }
  }
  div {
    // image
    padding: 0;
    margin: 0 0 0 0;
  }
}
</style>
