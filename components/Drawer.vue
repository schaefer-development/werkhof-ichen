<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
    color="ichen_blue"
    class="main-drawer"
    :style="{ '--v-navigation-drawer-width': '38vw' }"
  >
    <template v-slot:img>
      <v-img
        contain
        class="drawer-background-image"
        src="/logo_ichen.svg"
      ></v-img>
    </template>
    <v-card flat dark color="transparent" class="py-4">
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="toggleDrawer">
          <v-icon size="50">mdi-close</v-icon>
        </v-btn>
     </v-toolbar>

      <div class="flex justify-center items-center block mx-6 py-6 h-6">
        <img class="w-full-b max-w-[400px] mx-auto" src="/sewing_needle_beige.svg" alt="Nähnadel" />
      </div>

      <v-list flat nav class="px-0">
        <v-list-item link to="/">Startseite</v-list-item>
        <v-list-item link to="/werkhof">Werkhof</v-list-item>
       <!-- <v-list-group flat no-action>
          <template v-slot:activator>
            <v-list-item>Anfertigungen</v-list-item>
          </template>
          <v-list-item link to="/anfertigungen/leder">Leder</v-list-item>
          <v-list-item link to="/anfertigungen/weitere_materialien"
            >Weitere Materialien</v-list-item
          >
        </v-list-group>-->
        <v-list-item link to="/veranstaltungen"
          >Veranstaltungen</v-list-item
        >

        <v-list-item link to="/bilder">Bilder</v-list-item>
        <v-list-item link to="/kontakt">Kontakt</v-list-item>
        <v-list-group no-action>
          <template v-slot:activator flat>
            <v-list-item>Über mich</v-list-item>
          </template>

          <v-list-item link to="/ueber_mich/vita">Vita</v-list-item>
          <v-list-item link to="/ueber_mich/presse">Presse</v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
}
</script>

<style lang="scss"></style>
