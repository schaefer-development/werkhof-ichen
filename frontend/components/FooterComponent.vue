<template>
  <v-footer color="ichen_brown" dark padless>
    <v-container fluid class="pt-0 pb-3">
      <v-row class="d-none d-md-block">
        <div id="footer-component-footer-gallery">
          <v-img src="/footer_images/house.jpg" alt="Werkhof ichen"></v-img>
          <v-img src="/footer_images/etui.jpg" alt="Leder-Etui"></v-img>
          <v-img src="/footer_images/collection1.jpg" alt="Sammlung"></v-img>
          <v-img src="/footer_images/hearts.jpg" alt="Herzen"></v-img>
          <v-img src="/footer_images/sew.jpg" alt="Nähen"></v-img>
          <v-img src="/footer_images/collection2.jpg" alt="Sammlung"></v-img>
          <v-img
            src="/footer_images/kater_schroeder.jpg"
            alt="Kater Schröder"
          ></v-img>
          <v-img src="/footer_images/flower.jpg" alt="Blumen"></v-img>
          <v-img src="/footer_images/texture.jpg" alt="Textur"></v-img>
          <v-img src="/footer_images/lamp.jpg" alt="Lampe"></v-img>
        </div>
      </v-row>

      <v-row
        justify="center"
        align="center"
        class="footer-component-bottom-row pt-8 pl-12 pb-3 pr-12"
      >
        <v-col cols="12" sm="12" md="12" lg="2" xl="2" align="center">
          <v-img
            src="/logo_ichen_outline.svg"
            alt="Logo Werkhof ichen"
            max-width="90px"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="3" xl="2">
          Telefon:
          <a href="tel:+4922463197">02246 . 31 97</a>
          <br />E-Mail:
          <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="2" xl="2">
          <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
          <br />
          <nuxt-link to="/impressum">Impressum</nuxt-link>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="2" xl="2">
          <nuxt-link to="/agb">AGB</nuxt-link>
          <br />
          Copyright {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped lang="scss">
#footer-component-footer-gallery {
  width: 100%;
  height: 10vw;
  display: flex;
  div {
    width: 10vw;
  }
}
.footer-component-bottom-row {
  font-size: 0.9em;
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
  strong {
    font-family: 'Overlock';
    font-style: normal;
    font-weight: 900;
    font-size: 1.1em;
  }
}
</style>
