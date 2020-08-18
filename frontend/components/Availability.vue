<template>
  <v-chip v-if="available" dark color="success"
    ><strong>noch Plätze frei</strong></v-chip
  >
  <v-chip v-else dark color="warning"><strong>Warteliste</strong></v-chip>
</template>

<script>
export default {
  props: {
    veranstaltung: {
      type: Object,
      required: true,
    },
  },
  computed: {
    available() {
      const { maximaleAnzahlTeilnehmer } = this.veranstaltung
      if (!maximaleAnzahlTeilnehmer) return true
      return this.veranstaltung.anmeldungen.length < maximaleAnzahlTeilnehmer
    },
  },
}
</script>
