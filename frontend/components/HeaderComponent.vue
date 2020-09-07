<template>
  <v-app-bar height="200px" flat color="transparent" absolute app clipped-left>
    <v-container>
      <v-toolbar color="transparent" flat>
        <nuxt-link to="/">
          <v-img src="/logo_ichen.svg" alt="Logo Werkhof ichen" max-width="150px" />
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon aria-label="Open Drawer" @click.stop="toggleDrawer">
          <v-icon size="50">mdi-menu</v-icon>
          <div class="pl-6 menu_hint">Menu</div>
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
  .menu_hint {
    color: $ichen_blue_light;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    font-weight: normal;
    padding: 0 1em;
  }
}
</style>
