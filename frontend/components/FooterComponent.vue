<template>
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

    <v-row justify="center" class="pt-8 pl-12 pb-3 pr-12">
      <v-col cols="12" sm="12" md="3" lg="2" xl="2" align="center">
        <v-img src="/logo_ichen_outline.svg" alt="Logo Werkhof ichen" max-width="90px" />
      </v-col>
      <v-col cols="12" sm="4" md="3" lg="2" xl="2">
        <strong>werkhof ichen</strong>
        <br />02246 . 31 97
        <br />
        <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
      </v-col>
      <v-col cols="12" sm="4" md="3" lg="2" xl="2">
        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
        <br />
        <nuxt-link to="/impressum">Impressum</nuxt-link>
      </v-col>
      <v-col cols="12" sm="4" md="3" lg="2" xl="2">
        <nuxt-link to="/agb">AGB</nuxt-link>
        <br />
        Copyright {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  background-color: rgba(72, 65, 61, 1); // #48413d;
  .row:first-child {
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
  .row:last-child {
    color: #fff;
    div {
      font-size: 0.9em;

      strong {
        font-family: 'Overlock';
        font-style: normal;
        font-weight: 900;
        font-size: 1.1em;
      }
      a {
        color: #fff;
        text-decoration: none;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #191716;
        }
      }
    }
  }
}
</style>
