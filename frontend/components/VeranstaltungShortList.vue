<template>
  <div class="shortlist pb-4">
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
        class="shortlist_divider py-8 mx-auto"
        src="/sewing_needle_beige.svg"
        alt="Nähnaht"
        contain
        justify="center"
        width="100%"
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

<style lang="scss">
.shortlist .shortlist_item:last-child .v-image {
  display: none;
}
</style>
