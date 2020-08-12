<template>
  <booking-form :veranstaltung="veranstaltung"></booking-form>
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
