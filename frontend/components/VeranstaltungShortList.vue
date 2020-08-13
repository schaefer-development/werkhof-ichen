<template>
  <li class="shortlist_item">
    <p>
      <strong>{{ veranstaltung.Titel }}</strong>
      <br />
      {{ veranstaltung.Datum | formatDate }} Uhr
    </p>
    <p justify="end">
      <nuxt-link
        :to="{ name: 'anmelden-id', params: { id: veranstaltung.id } }"
      >
        <v-btn depressed small color="ichen_red white--text">Anmelden</v-btn>
      </nuxt-link>
    </p>

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
  p:nth-child(2) {
    text-align: right;
  }
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
