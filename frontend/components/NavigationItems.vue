<template>
  <div class="navigation-items">
    <v-btn text nuxt link to="/">Start</v-btn>
    <v-menu offset-y transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Veranstaltungen
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
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

    <v-menu offset-y transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Anfertigungen
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
        <nuxt-link to="/anfertigungen/weitere_textilien">Weitere Textilien</nuxt-link>
      </v-list>
    </v-menu>
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



<style lang="scss">
.navigation-items {
  // desktop //
  .v-btn {
    padding: 0 10px !important;
    font-size: 0.8em !important;
    font-family: 'Overlock';
    font-style: normal;
    font-weight: 900;
    color: #2a434c !important;
    -webkit-transition: all 0.3s ease-in-out !important;
    -moz-transition: all 0.3s ease-in-out !important;
    -o-transition: all 0.3s ease-in-out !important;
    transition: all 0.3s ease-in-out !important;
    &:before {
      background-color: transparent !important;
    }
    &:hover {
      color: #e0124d !important;
    }
    &.v-btn--active {
      color: #e0124d !important;
    }
    &[aria-expanded='true'] {
      color: #47737f !important;
    }
    &:nth-last-child(2),
    &:last-child {
      // last child => facebook and instagram
      min-width: 35px !important;
    }
  }
}

.v-menu__content {
  border-radius: 0 !important;
  box-shadow: none !important;
  .v-list {
    padding: 0em;
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: #2a434c !important;

    a {
      font-size: 0.9em;
      display: block;
      padding: 0.75em 1.25em;
      color: #fff;
      text-decoration: none;
      -webkit-transition: all 0.3s ease-in-out !important;
      -moz-transition: all 0.3s ease-in-out !important;
      -o-transition: all 0.3s ease-in-out !important;
      transition: all 0.3s ease-in-out !important;
      &:hover {
        color: #e0124d;
      }
    }
  }
}
</style>
