<template>
  <v-app>
    <div id="background"></div>

    <v-navigation-drawer v-model="drawer" temporary app width="100%">
      <v-row justify="end" class="pr-2">
        <v-btn icon class="pa-8 mr-0" @click.stop="drawer = !drawer">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-btn text nuxt link to="/">Start</v-btn>
        <v-expansion-panels accordion dark flat>
          <v-expansion-panel flat>
            <v-expansion-panel-header>Veranstaltungen</v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-link
                to="/veranstaltungen/kurse_fuer_kinder_und_jugendliche"
              >Kurse für Kinder und Jugendliche</nuxt-link>
              <nuxt-link to="/veranstaltungen/kurse_fuer_erwachsene">Kurse für Erwachsene</nuxt-link>
              <nuxt-link to="/veranstaltungen/geburtstagsevents">Geburtstagsevents</nuxt-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel flat>
            <v-expansion-panel-header>Anfertigungen</v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
              <nuxt-link to="/anfertigungen/weitere_textilien">Weitere Textilien</nuxt-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-btn text nuxt link to="/media">Media</v-btn>
        <v-btn text nuxt link to="/kontakt">Kontakt</v-btn>
        <v-btn text nuxt link to="/ueber_mich">Über mich</v-btn>
        <v-btn
          text
          link
          target="_blank"
          class="pl-0 pr-0 sm_link"
          href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
        >
          <v-icon color="#2a434c" medium>mdi-facebook</v-icon>
        </v-btn>
        <v-btn text link target="_blank" class="pl-0 pr-0 sm_link" href="#">
          <v-icon color="#2a434c" medium>mdi-instagram</v-icon>
        </v-btn>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar
      height="160px"
      flat
      color="rgba(255,255,255,0)"
      absolute
      app
      clipped-left
      class="navigation-items"
    >
      <nuxt-link to="/">
        <v-img src="/logo_ichen.svg" alt="Logo Werkhof ichen" max-width="110px" />
      </nuxt-link>
      <v-spacer></v-spacer>
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
        target="_blank"
        class="sm_link"
        href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
      >
        <v-icon color="#2a434c" medium>mdi-facebook</v-icon>
      </v-btn>
      <v-btn text link target="_blank" class="sm_link" href="#">
        <v-icon color="#2a434c" medium>mdi-instagram</v-icon>
      </v-btn>
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer">
        <v-icon color="#2a434c" large>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer padless>
      <footer-component></footer-component>
    </v-footer>
  </v-app>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      title: 'werkhof ichen',
      drawer: null,
    }
  },
  async mounted() {
    try {
      // ping heroku to wake it up
      await this.$axios.$get('/veranstaltungs/count')
    } catch {
      /* ignore */
    }
  },
}
</script>

<style lang="scss">
.v-ripple__container {
  display: none !important;
}

#background {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  background-image: url('../static/bg.jpg');
}

.v-app-bar__nav-icon {
  &:before,
  &:after {
    background-color: transparent !important;
  }
}

.v-navigation-drawer {
  padding: 0.5em 0.75em 1em 0.75em;
  background-color: #2a434c !important;
  height: 100vh;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 110vh;
    left: -30%;
    margin-top: -1em;
    margin-left: -1em;
    background-image: url(../static/logo_ichen_outline.svg);
    background-size: contain;
    background-position: 50% 50%;
    opacity: 0.04;
  }
  .v-navigation-drawer__content {
    div:first-child {
      .v-btn--icon {
        color: #f4ede6;
        padding-top: 3em;
        &:before,
        &:after {
          background-color: transparent !important;
        }
      }
    }
    div:last-child {
      display: flex;
      flex-wrap: wrap;
      max-width: inherit;
      flex-direction: column;
      .navigation-items {
        // mobile //
        .v-btn {
          padding: 20px !important;
          font-size: 1em !important;
          color: #f4ede6 !important;
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
    }
  }
  // mobile navigation //
  .v-expansion-panels {
    .v-expansion-panel {
      background-color: rgba(0, 0, 0, 0) !important;
      button.v-expansion-panel-header {
        font-family: 'Overlock';
        font-style: normal;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.0892857143em;
        width: auto !important;
      }
    }
    div.v-expansion-panel-content {
      div.v-expansion-panel-content__wrap {
        border-top: 1px dashed #fff !important;
        padding: 0.5em 0em 1em 0em;
        text-align: center !important;
        a {
          color: #fff !important;
          padding: 0.5em 0;
          text-decoration: none;
          &.nuxt-link-active {
            color: #e0124d !important;
          }
        }
      }
    }
  }
  // end of mobile navigation //
}

.v-overlay__scrim {
  background-color: red;
}

.custom_max_width {
  max-width: 1185px !important;
  margin: auto;
}

.layout .container .row:last-child {
  max-width: 1185px !important;
  margin: auto;
}

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
