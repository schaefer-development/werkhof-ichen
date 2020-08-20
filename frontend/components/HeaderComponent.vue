<template>
  <v-app-bar height="160px" flat color="transparent" absolute app clipped-left>
    <v-container>
      <v-toolbar color="transparent" flat class="d-none d-md-block">
        <nuxt-link to="/">
          <v-img
            src="/logo_ichen.svg"
            alt="Logo Werkhof ichen"
            max-width="110px"
          />
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-btn text nuxt link to="/">Startseite</v-btn>
        <v-btn text nuxt link to="/veranstaltungen">Veranstaltungen</v-btn>
        <v-menu offset-y transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Anfertigungen
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list dark color="ichen_blue">
            <v-list-item nuxt to="/anfertigungen/leder">Leder</v-list-item>
            <v-list-item nuxt to="/anfertigungen/weitere_textilien"
              >Weitere Textilien</v-list-item
            >
          </v-list>
        </v-menu>
        <v-btn text nuxt link to="/bilder">Bilder</v-btn>
        <v-btn text nuxt link to="/kontakt">Kontakt</v-btn>
        <v-menu offset-y transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Über mich
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list dark color="ichen_blue">
            <v-list-item nuxt to="/ueber_mich/werkhof">Werkhof</v-list-item>
            <v-list-item nuxt to="/ueber_mich/vita">Vita</v-list-item>
            <v-list-item nuxt to="/ueber_mich/presse">Presse</v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          text
          link
          target="_blank"
          rel="noopener"
          class="sm_link"
          aria-label="Facebook"
          href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
        >
          <v-icon color="ichen_blue" medium>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          text
          link
          target="_blank"
          rel="noopener"
          class="sm_link"
          aria-label="Instagram"
          href="https://www.instagram.com/irmina_schmitz/?hl=de"
        >
          <v-icon color="ichen_blue" medium>mdi-instagram</v-icon>
        </v-btn>
      </v-toolbar>
      <v-toolbar color="transparent" flat class="d-md-none">
        <nuxt-link to="/">
          <v-img
            src="/logo_ichen.svg"
            alt="Logo Werkhof ichen"
            max-width="110px"
          />
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon aria-label="Open Drawer" @click.stop="toggleDrawer">
          <v-icon color="ichen_blue" large>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
  },
}
</script>

<style lang="scss" scoped>
.v-btn {
  font-style: normal;
  font-weight: 900;
  font-family: 'Overlock';
  font-size: 0.75rem;
  color: $ichen_blue !important;
}
</style>
