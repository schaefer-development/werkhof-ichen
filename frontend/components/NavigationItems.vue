<template>
  <div class="navigation-items">
    <v-btn text nuxt link to="/">Start</v-btn>
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">Veranstaltungen</v-btn>
      </template>
      <v-list>
        <nuxt-link
          to="/veranstaltungen/kurse_fuer_kinder_und_jugendliche"
        >Kurse für Kinder und Jugendliche</nuxt-link>
        <nuxt-link to="/veranstaltungen/kurse_fuer_erwachsene">Kurse für Erwachsene</nuxt-link>
        <nuxt-link to="/veranstaltungen/geburtstagsevents">Geburtstagsevents</nuxt-link>
        <nuxt-link to="/veranstaltungen/anmelden">Anmelden</nuxt-link>
      </v-list>
    </v-menu>
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">Anfertigungen</v-btn>
      </template>
      <v-list>
        <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
        <nuxt-link to="/anfertigungen/weitere_textilien">Weitere Textilien</nuxt-link>
      </v-list>
    </v-menu>
    <v-btn text nuxt link to="/kurse">Kurse</v-btn>

    <v-btn text nuxt link to="/kontakt">Kontakt</v-btn>
    <v-btn text nuxt link to="/ueber_mich">Über mich</v-btn>
  </div>
</template>


