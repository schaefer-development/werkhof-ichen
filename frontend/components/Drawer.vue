<template>
  <v-navigation-drawer v-model="drawer" temporary app color="ichen_blue">
    <template v-slot:img>
      <v-img contain class="drawer-background-image" src="/logo_ichen.svg"></v-img>
    </template>
    <v-card flat dark color="transparent" class="py-2">
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="toggleDrawer">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list flat nav justify="center" align="center" class="px-0">
        <v-list-item nuxt link to="/">Startseite</v-list-item>
        <v-list-item nuxt link to="/veranstaltungen">Veranstaltungen</v-list-item>
        <v-list-group flat no-action>
          <template v-slot:activator>
            <v-list-item>Anfertigungen</v-list-item>
          </template>
          <v-list-item nuxt link to="/anfertigungen/leder">Leder</v-list-item>
          <v-list-item nuxt link to="/anfertigungen/weitere_textilien">Weitere Textilien</v-list-item>
        </v-list-group>
        <v-list-item nuxt link to="/bilder">Bilder</v-list-item>
        <v-list-item nuxt link to="/kontakt">Kontakt</v-list-item>
        <v-list-group no-action>
          <template flat v-slot:activator>
            <v-list-item>Über mich</v-list-item>
          </template>
          <v-list-item nuxt link to="/ueber_mich/werkhof">Werkhof</v-list-item>
          <v-list-item nuxt link to="/ueber_mich/vita">Vita</v-list-item>
          <v-list-item nuxt link to="/ueber_mich/presse">Presse</v-list-item>
        </v-list-group>
        <v-list-item class="pt-3">
          <v-btn
            icon
            link
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
          >
            <v-icon medium>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            link
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            href="https://www.instagram.com/irmina_schmitz/"
            icon
          >
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

<style lang="scss">
.v-navigation-drawer {
  padding: 0;
  .drawer-background-image {
    opacity: 0.04;
    left: -20%;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  // drawer active default
  a.v-list-item--active {
    background-color: $ichen_red !important;
    color: #fff !important;
  }

  // drawer level 1
  .v-list-item,
  .v-list-group .v-list-group__header {
    font-family: 'Overlock';
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1rem;
    padding: 0 20px !important;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
  }
  .v-list-group {
    .v-list-group__header {
      &[aria-expanded='true'] {
        /* level 2 is open (default is closed)
        .v-list-item {
          color: $ichen_blue_light !important;
        }
        .v-list-group__header__append-icon {
          color: $ichen_blue_light !important;
        } */
      }
      .v-list-item {
        padding: 0 !important;
      }
      .v-list-group__header__append-icon {
        color: #fff !important;
      }
    }
    // level 2
    .v-list-group__items {
      border-top: 1px dashed #fff;
      border-bottom: 1px dashed #fff;
      background-color: $ichen_blue_light;
      a {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 800;
        text-transform: none;
        letter-spacing: 0;
        &.v-list-item--active {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
