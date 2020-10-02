<template>
  <v-col xs="12" sm="6" lg="4">
    <v-card rounded="0" flat>
      <v-img
        class="white--text align-end"
        contain
        aspect-ratio="1"
        :src="terminabsprache.Vorschaubild.url"
      ></v-img>
      <v-card-title class="ichen_blue--text text-h2">
        {{ terminabsprache.Titel }}
      </v-card-title>
      <v-card-text>
        <client-only>
          <p class="ichen_brown--text">
            <strong
              >{{ terminabsprache.Preis }} Euro plus Materialkosten</strong
            >
          </p>
          <p v-html="$md.render(terminabsprache.Beschreibung)"></p>
        </client-only>
      </v-card-text>

      <v-card-actions class="pt-1 pb-8 pr-4">
        <v-btn
          nuxt
          depressed
          color="ichen_red white--text"
          :to="{
            name: 'terminabsprache-id',
            params: { id: terminabsprache.id },
          }"
          >Termin anfragen</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    terminabsprache: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.v-card__actions {
  justify-content: flex-end;
}
</style>
