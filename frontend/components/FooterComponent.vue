<template>
  <v-footer dark padless>
    <v-container fluid class="pt-0 pb-3">
      <v-row>
        <div id="footer-component-footer-gallery">
          <v-img src="/footer_images/house.jpg" alt="Werkhof ichen"></v-img>
          <v-img src="/footer_images/flower2.jpg" alt="Blumen"></v-img>

          <v-img src="/footer_images/tea_pot.jpg" alt="Tea Time"></v-img>
          <v-img src="/footer_images/collection3.jpg" alt="Collection"></v-img>

          <v-img src="/footer_images/physalis.jpg" alt="Physalis"></v-img>

          <v-img src="/footer_images/sew.jpg" alt="Nähen"></v-img>
          <v-img
            src="/footer_images/kater_schroeder.jpg"
            alt="Kater Schröder"
          ></v-img>
          <v-img src="/footer_images/flower.jpg" alt="Blumen"></v-img>
          <v-img src="/footer_images/stone.jpg" alt="Textur"></v-img>
          <v-img src="/footer_images/lamp.jpg" alt="Lampe"></v-img>
        </div>
      </v-row>

      <v-row
        justify="center"
        align="center"
        class="footer-component-bottom-row pt-8 pl-12 pb-3 pr-12"
      >
        <v-col cols="12" sm="6" md="4" lg="3" xl="2" align="center">
          <v-img
            src="/logo_ichen_outline.svg"
            alt="Logo Werkhof ichen"
            max-width="180px"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" xl="2">
          <p class="pl-2">
            <a href="tel:+4922463197">02246 . 31 97</a>
            <br />
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </p>

          <p class="pl-2">
            <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
            <br />
            <nuxt-link to="/impressum">Impressum</nuxt-link>
            <br />
            <nuxt-link to="/agb">AGB</nuxt-link>
            <br />
            Copyright {{ new Date().getFullYear() }}
          </p>

          <p>
            <v-btn
              icon
              link
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              href="https://de-de.facebook.com/pages/category/Education/Werkhof-ichen-130771390426775/"
            >
              <v-icon medium>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              link
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              href="https://www.instagram.com/irmina_schmitz/"
              icon
            >
              <v-icon medium>mdi-instagram</v-icon>
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped lang="scss">
footer {
  background-color: rgba(54, 47, 43, 0.93) !important;
}
#footer-component-footer-gallery {
  width: 100%;
  height: 10vw;
  display: flex;
  div {
    width: 10vw;
  }
}
.footer-component-bottom-row {
  font-size: 0.85em;
  a {
    color: #fff;
    text-decoration: none;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $ichen_yellow !important;
    }
  }
  strong {
    font-family: 'Overlock';
    font-style: normal;
    font-weight: 900;
    font-size: 1.1em;
  }
}

@media only screen and (max-width: 960px) {
  #footer-component-footer-gallery {
    width: 100%;
    height: 40vw;
    flex-wrap: wrap;
    div {
      width: 18vw;
    }
  }
}
</style>
