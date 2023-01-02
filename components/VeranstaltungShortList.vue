<template>
  <div class="shortlist pb-4">
    <div
      v-for="veranstaltung in veranstaltungen"
      :key="veranstaltung.id"
      class="shortlist_item pt-2"
    >
      <p class="ma-0">
        <strong>{{ veranstaltung.titel }}</strong>
      </p>
      <div
        class="anzeigedatum"
        v-html="$md.render(veranstaltung.anzeigedatum)"
      ></div>

      <p>{{ veranstaltung.kurzbeschreibung }}</p>
      <client-only placeholder="Anmelden">
        <div>
          <v-btn
            nuxt
            :to="{ name: 'veranstaltung-id', params: { id: veranstaltung.id } }"
            depressed
            color="ichen_red white--text"
            >Mehr</v-btn
          >
        </div>
      </client-only>
      <div
        class="w-full max-w-[400px] h-12 py-12 mx-auto flex items-center justify-center"
      >
        <img src="/sewing_needle_beige.svg" alt="Nähnadel" />
      </div>
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
};
</script>

<style lang="scss">
.shortlist .shortlist_item:last-child .v-image {
  display: none;
}
</style>
