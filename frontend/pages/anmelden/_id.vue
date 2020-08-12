<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="veranstaltung.Vorschaubild.url"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <booking-form :veranstaltung="veranstaltung"></booking-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookingForm from '~/components/BookingForm'

export default {
  components: {
    BookingForm,
  },
  async asyncData(context) {
    const veranstaltung = await context.$axios.$get(
      '/veranstaltungs/' + context.params.id
    )
    return { veranstaltung }
  },
}
</script>
