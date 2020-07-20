<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-row justify="end" class="pr-2">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <navigation-items></navigation-items>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar height="100px" flat color="rgba(255,255,255,0)" absolute app clipped-left>
      <v-toolbar-title v-text="title" />
      <div class="d-none d-lg-block">
        <navigation-items></navigation-items>
      </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none" />
    </v-app-bar>

    <v-main>
      <v-container pb-10>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer color="rgba(72,65,61,0.9)" padless>
      <v-container fluid pt-0 pb-6>
        <v-row>
          <div id="footer_gallery">
            <div class="house"></div>
            <div class="shield"></div>
            <div class="collection1"></div>
            <div class="garden"></div>
            <div class="sew"></div>
            <div class="collection2"></div>
            <div class="kater_schroeder"></div>
            <div class="flower"></div>
            <div class="texture"></div>
            <div class="lamp"></div>
          </div>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <img src="/logo_ichen.svg" alt="Logo Werkhof ichen" class="mb-5" />
          </v-col>
          <v-col cols="2">
            <strong>werkhof ichen</strong>
            <br />02246 . 31 97
            <br />
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </v-col>
          <v-col cols="2">
            Datenschutz
            <br />Impressum
            <br />Sitemap
            <br />
          </v-col>
          <v-col cols="2">
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

<style lang="scss" scoped >
body {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-image: url('../static/bg.jpg') !important;
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
      background-position: 50% 50%;
      background-repeat: no-repeat;
      &.house {
        background-image: url(../static/footer_images/house.jpg);
      }
      &.shield {
        background-image: url(../static/footer_images/shield.jpg);
      }
      &.collection1 {
        background-image: url(../static/footer_images/collection1.jpg);
      }
      &.garden {
        background-image: url(../static/footer_images/garden.jpg);
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
