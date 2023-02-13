<template>
  <v-app>
    <div id="background"></div>
    <drawer ref="drawer"></drawer>
    <header-component @toggleDrawer="toggleDrawer"></header-component>

    <v-main class="pb-16 px-12">
      <nuxt />
    </v-main>

    <footer-component></footer-component>
  </v-app>
</template>

<script>
import Drawer from '~/components/Drawer.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import HeaderComponent from '~/components/HeaderComponent.vue'

export default {
  components: {
    Drawer,
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      title: 'werkhof ichen',
    }
  },
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggleDrawer()
    },
  },
}
</script>

<style lang="scss">
#background {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  background-image: url('../static/bg.jpg');
}
</style>
