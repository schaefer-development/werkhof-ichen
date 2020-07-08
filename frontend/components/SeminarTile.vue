<template>
  <div class="seminar-tile">
    <h1>{{ seminar.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    seminar: {
      type: Object,
      required: true,
    },
  },
}
</script>
