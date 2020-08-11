<template>
  <div class="navigation-items">
    <v-expansion-panels accordion dark>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Veranstaltungen
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <nuxt-link to="/veranstaltungen/kurse_fuer_kinder_und_jugendliche"
            >Kurse für Kinder und Jugendliche</nuxt-link
          >
          <nuxt-link to="/veranstaltungen/kurse_fuer_erwachsene"
            >Kurse für Erwachsene</nuxt-link
          >
          <nuxt-link to="/veranstaltungen/geburtstagsevents"
            >Geburtstagsevents</nuxt-link
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Anfertigungen
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
          <nuxt-link to="/anfertigungen/weitere_textilien"
            >Weitere Textilien</nuxt-link
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn text nuxt link to="/">Start</v-btn>
    <v-btn text nuxt link to="/media">Media</v-btn>
    <v-btn text nuxt link to="/kontakt">Kontakt</v-btn>
    <v-btn text nuxt link to="/ueber_mich">Über mich</v-btn>
    <v-btn
      text
      link
      target="_blanc"
      class="pl-0 pr-0"
      href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
    >
      <v-icon color="#2a434c" medium>mdi-facebook</v-icon>
    </v-btn>
    <v-btn text link target="_blanc" class="pl-0 pr-0" href="#">
      <v-icon color="#2a434c" medium>mdi-instagram</v-icon>
    </v-btn>
  </div>
</template>
