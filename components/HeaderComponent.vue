<template>
  <v-app-bar height="200px" flat color="transparent" absolute app clipped-left>
    <v-container class="pa-0">
      <v-toolbar color="transparent" flat>
        <nuxt-link to="/">
          <v-img
            src="/logo_ichen.svg"
            class="d-none d-sm-flex"
            alt="Logo werkhof ichen"
            max-width="150px"
          />
          <v-img
            src="/logo_ichen.svg"
            width="80px"
            class="d-flex d-sm-none"
            alt="Logo werkhof ichen"
          />
        </nuxt-link>

        <v-spacer></v-spacer>
        <v-btn
          icon
          link
          target="_blank"
          rel="noopener"
          color="ichen_blue"
          aria-label="Facebook"
          href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
        >
          <v-icon size="30" medium>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          class="mr-3"
          link
          target="_blank"
          rel="noopener"
          color="ichen_blue"
          aria-label="Instagram"
          href="https://www.instagram.com/irmina_schmitz/"
          icon
        >
          <v-icon size="30">mdi-instagram</v-icon>
        </v-btn>
        <v-app-bar-nav-icon aria-label="Open Drawer" @click.stop="toggleDrawer">
          <v-icon size="50">mdi-menu</v-icon>
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
header {
  .v-toolbar__content button[aria-label='Open Drawer'] {
    //open button

    &:before {
      background-color: rgba(0, 0, 0, 0) !important;
    }
    &:hover {
      :before {
        background-color: rgba(0, 0, 0, 0) !important;
      }
    }
    span {
      color: $ichen_blue;
      &:hover {
        color: $ichen_red;
      }
    }
  }
}
</style>
