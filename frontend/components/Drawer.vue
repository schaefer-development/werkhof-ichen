<template>
  <v-navigation-drawer v-model="drawer" temporary app color="ichen_blue">
    <template v-slot:img>
      <v-img
        contain
        class="drawer-background-image"
        src="/logo_ichen.svg"
      ></v-img>
    </template>
    <v-card flat dark color="transparent" class="pa-4">
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="toggleDrawer">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list flat dense nav justify="center" align="center">
        <v-list-item nuxt link to="/">Start</v-list-item>
        <v-list-item nuxt link to="/veranstaltungen"
          >Veranstaltungen</v-list-item
        >
        <v-list-group flat no-action>
          <template v-slot:activator>
            <v-list-item class="pa-0">Anfertigungen</v-list-item>
          </template>
          <v-list-item nuxt link to="/anfertigungen/leder">Leder</v-list-item>
          <v-list-item nuxt link to="/anfertigungen/weitere_textilien"
            >Weitere Textilien</v-list-item
          >
        </v-list-group>
        <v-list-item nuxt link to="/media">Media</v-list-item>
        <v-list-item nuxt link to="/kontakt">Kontakt</v-list-item>
        <v-list-group flat no-action>
          <template v-slot:activator>
            <v-list-item class="pa-0">Über mich</v-list-item>
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
            href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
          >
            <v-icon medium>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            link
            target="_blank"
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
  * {
    font-family: 'Overlock';
    font-style: normal;
    font-weight: 900;
  }

  .drawer-background-image {
    opacity: 0.04;
    left: -20%;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  a {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .v-list-group {
    .v-list-group__header {
      div {
        &.v-list-item {
          text-transform: uppercase;
          margin-bottom: 0 !important;
          letter-spacing: 0.1em;
        }
        &.v-list-group__header__append-icon {
          color: #fff !important;
        }
      }
    }
    .v-list-group__items {
      border-top: 1px dashed #fff !important;
      a {
        padding-left: 8px !important;
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0;
      }
    }
  }
}
</style>
