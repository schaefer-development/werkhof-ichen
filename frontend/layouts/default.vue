<template>
  <v-app>
    <div id="background">
      <v-parallax height="1000" src="/bg.jpg"></v-parallax>
    </div>
    <v-navigation-drawer v-model="drawer" temporary app width="60%">
      <v-row justify="end" class="pr-2">
        <v-btn icon class="pa-8 mr-0" @click.stop="drawer = !drawer">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <navigation-items></navigation-items>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar height="160px" flat color="rgba(255,255,255,0)" absolute app clipped-left>
      <v-container class="pa-0">
        <v-row justify-lg="center" align="center" class>
          <v-col md="auto ml-6">
            <nuxt-link to="/">
              <v-img src="/logo_ichen.svg" alt="Logo Werkhof ichen" max-width="110px" />
            </nuxt-link>
          </v-col>
          <v-col align="right">
            <div class="d-none d-md-block">
              <navigation-items></navigation-items>
            </div>
            <v-app-bar-nav-icon class="d-md-none text" @click.stop="drawer = !drawer">
              <v-icon color="#2a434c" large>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="main">
      <v-layout column justify-center align-center pb-12>
        <nuxt />
      </v-layout>
    </v-main>

    <v-footer padless>
      <footer-component></footer-component>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationItems from '../components/NavigationItems.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    NavigationItems,
    FooterComponent,
  },
  data() {
    return {
      fixed: false,
      title: 'werkhof ichen',
      drawer: null,
    }
  },
}
</script>

<style lang="scss">
#app {
}

#background {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
}

.v-ripple__container {
  display: none !important;
}

.v-app-bar__nav-icon {
  &:before,
  &:after {
    background-color: transparent !important;
  }
}

.v-navigation-drawer {
  padding: 52px 0.75em 1em 0.75em;
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
</style>
