<template>
  <div class="shortlist white--text">
    <div
      v-for="veranstaltung in veranstaltungen"
      :key="veranstaltung.id"
      class="shortlist_item pt-2"
    >
      <p>
        <strong>{{ veranstaltung.Titel }}</strong>
        <br />
        {{ veranstaltung.Datum | formatDate }} Uhr
      </p>
      <client-only placeholder="Anmelden">
        <div class="text-right">
          <v-btn
            nuxt
            :to="{ name: 'veranstaltung-id', params: { id: veranstaltung.id } }"
            depressed
            color="ichen_red white--text"
            >Mehr</v-btn
          >
        </div>
      </client-only>

      <v-img
        class="shortlist_divider my-6"
        src="/shortlist_divider.svg"
        alt="Nähnaht"
        max-width="400px"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    veranstaltungen: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.shortlist {
  .shortlist_item {
    &:last-child {
      padding-bottom: 1em;
      .shortlist_divider {
        display: none;
      }
    }
  }
}
</style>
