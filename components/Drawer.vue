<template>
  <v-navigation-drawer v-model="drawer" temporary app color="ichen_blue">
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
        <v-list-item nuxt link to="/">Startseite</v-list-item>
        <v-list-item nuxt link to="/werkhof">Werkhof</v-list-item>
       <!-- <v-list-group flat no-action>
          <template v-slot:activator>
            <v-list-item>Anfertigungen</v-list-item>
          </template>
          <v-list-item nuxt link to="/anfertigungen/leder">Leder</v-list-item>
          <v-list-item nuxt link to="/anfertigungen/weitere_materialien"
            >Weitere Materialien</v-list-item
          >
        </v-list-group>-->
        <v-list-item nuxt link to="/veranstaltungen"
          >Veranstaltungen</v-list-item
        >

        <v-list-item nuxt link to="/bilder">Bilder</v-list-item>
        <v-list-item nuxt link to="/kontakt">Kontakt</v-list-item>
        <v-list-group no-action>
          <template v-slot:activator flat>
            <v-list-item>Über mich</v-list-item>
          </template>

          <v-list-item nuxt link to="/ueber_mich/vita">Vita</v-list-item>
          <v-list-item nuxt link to="/ueber_mich/presse">Presse</v-list-item>
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

<style lang="scss">
.v-navigation-drawer {
  min-width: 38% !important;
  .v-navigation-drawer__content {
  }
  .v-toolbar__content {
    padding: 7px 30px !important;
    button {
      background-color: rgba(0, 0, 0, 0) !important;
      &:before,
      &:after {
        background-color: rgba(0, 0, 0, 0) !important;
      }
      &:hover {
        color: $ichen_red !important;
        background-color: rgba(0, 0, 0, 0) !important;
        &:before,
        &:after {
          background-color: rgba(0, 0, 0, 0) !important;
        }
      }
    }
  }
  .drawer-background-image {
    opacity: 0.02;
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
    font-size: 0.9rem;

    padding: 7px 30px !important;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
    &:hover {
      background-color: $ichen_blue_dark !important;
    }
  }
  .v-list-group {
    .v-list-group__header {
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
        font-weight: 400;
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
