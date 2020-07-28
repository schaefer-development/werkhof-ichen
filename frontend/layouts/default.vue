<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app width="100%">
      <v-row justify="end" class="pr-2">
        <v-btn icon @click.stop="drawer = !drawer" class="pa-8 mr-0">
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <navigation-items></navigation-items>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar
      height="160px"
      flat
      color="rgba(255,255,255,0)"
      absolute
      app
      clipped-left
      class="custom_max_width"
    >
      <v-container class="pa-0 custom_max_width">
        <v-row justify-lg="center" align="center" class>
          <v-col md="auto ml-6">
            <nuxt-link to="/">
              <v-img src="/logo_ichen.svg" alt="Logo Werkhof ichen" max-width="120px" />
            </nuxt-link>
          </v-col>
          <v-col align="right">
            <div class="d-none d-md-block">
              <navigation-items></navigation-items>
            </div>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none text">
              <v-icon color="#2a434c" large>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="main custom_max_width">
      <v-layout column justify-center align-center pb-12>
        <nuxt />
      </v-layout>
    </v-main>

    <v-footer color="rgba(72,65,61,0.9)" padless>
      <v-container fluid pt-0 pb-3>
        <v-row>
          <div id="footer_gallery">
            <div class="house"></div>
            <div class="etui"></div>
            <div class="collection1"></div>
            <div class="hearts"></div>
            <div class="sew"></div>
            <div class="collection2"></div>
            <div class="kater_schroeder"></div>
            <div class="flower"></div>
            <div class="texture"></div>
            <div class="lamp"></div>
          </div>
        </v-row>

        <v-row justify="center" class="pt-6">
          <v-col xs="12" sm="6" md="2" align="center">
            <v-img src="/logo_ichen_outline.svg" alt="Logo Werkhof ichen" max-width="80px" />
          </v-col>
          <v-col xs="12" sm="6" md="2">
            <strong>werkhof ichen</strong>
            <br />02246 . 31 97
            <br />
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </v-col>
          <v-col xs="12" sm="6" md="2">
            Datenschutz
            <br />Impressum
            <br />
          </v-col>
          <v-col xs="12" sm="6" md="2">
            AGB
            <br />
            Copyright {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationItems from '../components/NavigationItems.vue'

export default {
    components: {
    NavigationItems,
  },
  data() {
    return {
      fixed: false,
      title: 'werkhof ichen',
      drawer: null
    }
  },
}
</script>

<style lang="scss">
#app {
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  background-image: url(../static/bg.jpg);
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

footer {
  color: #fff !important;
  #footer_gallery {
    width: 100%;
    height: 10vw;
    display: flex;
    div {
      flex-grow: 10;
      height: 10;
      display: inline-block;
      margin: 0;
      padding: 0;
      background-size: cover;
      background-position: 50% 100%;
      background-repeat: no-repeat;
      &.house {
        background-image: url(../static/footer_images/house.jpg);
      }
      &.etui {
        background-image: url(../static/footer_images/etui.jpg);
      }
      &.collection1 {
        background-image: url(../static/footer_images/collection1.jpg);
      }
      &.hearts {
        background-image: url(../static/footer_images/hearts.jpg);
      }
      &.sew {
        background-image: url(../static/footer_images/sew.jpg);
      }
      &.collection2 {
        background-image: url(../static/footer_images/collection2.jpg);
      }
      &.kater_schroeder {
        background-image: url(../static/footer_images/kater_schroeder.jpg);
      }
      &.flower {
        background-image: url(../static/footer_images/flower.jpg);
      }
      &.texture {
        background-image: url(../static/footer_images/texture.jpg);
      }
      &.lamp {
        background-image: url(../static/footer_images/lamp.jpg);
      }
    }
  }
}
</style>
