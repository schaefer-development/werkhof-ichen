<template>
  <v-app dark>
    <v-app-bar height="100px" flat color="rgba(255,255,255,0)" app absolute>
      <v-toolbar-title v-text="title" />

      <v-btn text nuxt link to="/">Start</v-btn>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Anfertigungen</v-btn>
        </template>
        <v-list>
          <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
          <nuxt-link to="/anfertigungen/kindergeburtstag">Kindergeburtstag</nuxt-link>
        </v-list>
      </v-menu>
      <v-btn text nuxt link to="/kurse">Kurse</v-btn>

      <v-btn text nuxt link to="/anmelden">Anmelden</v-btn>

      <v-btn text nuxt link to="/kontakt">Kontakt</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <div id="footer_gallery">
      <div class="footer_gallery_item">1</div>
      <div class="footer_gallery_item">2</div>
      <div class="footer_gallery_item">3</div>
      <div class="footer_gallery_item">4</div>
      <div class="footer_gallery_item">5</div>
      <div class="footer_gallery_item">6</div>
      <div class="footer_gallery_item">7</div>
      <div class="footer_gallery_item">8</div>
    </div>

    <v-footer color="rgba(72,65,61,0.9)" padless>
      <v-container>
        <v-row class="mb-6" no-gutters light>
          <v-col>LOGO</v-col>
          <v-col>
            werkhof ichen
            <br />02246 . 31 97
            <br />
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </v-col>
          <v-col>
            Datenschutz
            <br />Impressum
            <br />Sitemap
            <br />
          </v-col>
          <v-col>
            AGB
            <br />
            {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'werkhof ichen',
    }
  },
}
</script>

<style lang="scss" scoped >
#footer_gallery {
  width: 100%;
  height: 12.5vw;
  display: flex;
  div {
    flex-grow: 8;
    height: 12.5vw;
    display: inline-block;
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
}

footer {
  padding: 1em;
  color: #fff !important;
}
</style>
