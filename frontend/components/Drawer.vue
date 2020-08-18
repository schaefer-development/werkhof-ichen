<template>
  <v-navigation-drawer v-model="drawer" temporary app color="ichen_blue" width="62%">
    <template v-slot:img>
      <v-img contain class="drawer-background-image" src="/logo_ichen.svg"></v-img>
    </template>
    <v-card flat dark color="transparent" class="pa-4">
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="toggleDrawer">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list nav>
        <v-list-item nuxt link to="/">Start</v-list-item>
        <v-list-item nuxt link to="/veranstaltungen">Veranstaltungen</v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item>Anfertigungen</v-list-item>
          </template>
          <v-list-item nuxt link to="/anfertigungen/leder">Leder</v-list-item>
          <v-list-item nuxt link to="/anfertigungen/weitere_textilien">Weitere Textilien</v-list-item>
        </v-list-group>
        <v-list-item nuxt link to="/media">Media</v-list-item>
        <v-list-item nuxt link to="/kontakt">Kontakt</v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item>Über mich</v-list-item>
          </template>
          <v-list-item nuxt link to="/ueber_mich/vita">Vita</v-list-item>
          <v-list-item nuxt link to="/ueber_mich/presse">Presse</v-list-item>
        </v-list-group>
        <v-list-item>
          <v-btn
            icon
            link
            target="_blank"
            href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
          >
            <v-icon medium>mdi-facebook</v-icon>
          </v-btn>
          <v-btn link target="_blank" href="https://www.instagram.com/irmina_schmitz/" icon>
            <v-icon medium>mdi-instagram</v-icon>
          </v-btn>
        </v-list-item>
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

<style lang="scss" scoped>
* {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 900;
}

.drawer-background-image {
  opacity: 0.04;
}
</style>
