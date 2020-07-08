<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />

      <v-btn text v-bind="attrs" nuxt link to="/" v-on="on">Start</v-btn>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Anfertigungen</v-btn>
        </template>
        <v-list>
          <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
          <nuxt-link to="/anfertigungen/kindergeburtstag"
            >Kindergeburtstag</nuxt-link
          >
        </v-list>
      </v-menu>
      <v-btn text v-bind="attrs" nuxt link to="/kurse" v-on="on">Kurse</v-btn>

      <v-btn text v-bind="attrs" nuxt link to="/anmelden" v-on="on"
        >Anmelden</v-btn
      >

      <v-btn text v-bind="attrs" nuxt link to="/kontakt" v-on="on"
        >Kontakt</v-btn
      >
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
    }
  },
}
</script>

<style scoped></style>
