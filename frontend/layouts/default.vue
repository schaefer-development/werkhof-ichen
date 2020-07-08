<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"
            >Anfertigungen</v-btn
          >
        </template>
        <v-list>
          <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
          <nuxt-link to="/anfertigungen/kindergeburtstag"
            >Kindergeburtstag</nuxt-link
          >
        </v-list>
      </v-menu>
      <nuxt-link to="/kurse">Kurse</nuxt-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'Vuetify.js',
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  },
}
</script>
