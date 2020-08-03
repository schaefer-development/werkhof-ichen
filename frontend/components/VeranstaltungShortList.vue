<template>
  <li class="shortlist_item">
    <strong>{{ veranstaltung.Titel }}</strong>
    <br />
    {{ veranstaltung.Datum }}
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
  div {
    // image
    margin: 0.5em 0 0 0;
  }
}
</style>