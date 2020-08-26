<template>
  <anfertigungen-wrapper>
    <template v-slot:banner>
      <v-img
        src="/header_images/header_other_materials.jpg"
        alt="werkhof ichen: Andere Textilien"
      />
    </template>
    <v-card rounded="0" flat>
      <v-card-title class="text-h2">Weitere Textilien</v-card-title>
      <v-card-text></v-card-text>
    </v-card>
  </anfertigungen-wrapper>
</template>

<script>
import AnfertigungenWrapper from '~/components/AnfertigungenWrapper'

export default {
  components: {
    AnfertigungenWrapper,
  },
}
</script>
