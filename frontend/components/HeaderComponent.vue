<template>
  <v-app-bar
    height="160px"
    flat
    color="transparent"
    absolute
    app
    clipped-left
    class="navigation-items"
  >
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
        <v-btn text nuxt link to="/">Start</v-btn>
        <v-btn text nuxt link to="/veranstaltungen">Veranstaltungen</v-btn>
        <v-menu offset-y transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Anfertigungen
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
            <nuxt-link to="/anfertigungen/weitere_textilien"
              >Weitere Textilien</nuxt-link
            >
          </v-list>
        </v-menu>
        <v-btn text nuxt link to="/media">Media</v-btn>
        <v-btn text nuxt link to="/kontakt">Kontakt</v-btn>
        <v-btn text nuxt link to="/ueber_mich">Über mich</v-btn>
        <v-btn
          text
          link
          target="_blank"
          class="sm_link"
          href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
        >
          <v-icon color="ichen_blue" medium>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          text
          link
          target="_blank"
          class="sm_link"
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
        <v-app-bar-nav-icon @click.stop="toggleDrawer">
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

<style lang="scss">
.navigation-items {
  // desktop //
  .v-btn {
    padding: 0 10px !important;
    font-size: 0.8em !important;
    font-family: 'Overlock';
    font-style: normal;
    font-weight: 900;
    color: $ichen_blue !important;
    -webkit-transition: all 0.3s ease-in-out !important;
    -moz-transition: all 0.3s ease-in-out !important;
    -o-transition: all 0.3s ease-in-out !important;
    transition: all 0.3s ease-in-out !important;
    &:before {
      background-color: transparent !important;
    }
    &:hover {
      color: #e0124d !important;
    }
    &.v-btn--active {
      color: #e0124d !important;
    }
    &[aria-expanded='true'] {
      color: #47737f !important;
    }
    &:nth-last-child(2),
    &:last-child {
      // last child => facebook and instagram
      min-width: 35px !important;
    }
  }
}

.v-menu__content {
  border-radius: 0 !important;
  box-shadow: none !important;
  .v-list {
    padding: 0em;
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: $ichen_blue !important;

    a {
      font-size: 0.9em;
      display: block;
      padding: 0.75em 1.25em;
      color: #fff;
      text-decoration: none;
      -webkit-transition: all 0.3s ease-in-out !important;
      -moz-transition: all 0.3s ease-in-out !important;
      -o-transition: all 0.3s ease-in-out !important;
      transition: all 0.3s ease-in-out !important;
      &:hover {
        color: #e0124d;
      }
    }
  }
}
</style>
