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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <v-footer color="rgba(72,65,61,0.9)" padless>
      <v-container fluid padless>
        <v-row justify="center">
          <v-col v-for="n in 10" :key="n" class="d-flex child-flex" cols="1">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            ></v-img>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters light>
          <v-col cols="2">LOGO</v-col>
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
body {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-image: url(../static/bg.jpg) !important;
}

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
    &:nth-child(1) {
      background-image: url(../static/footer_images/house.jpg);
    }
    &:nth-child(2) {
      background-image: url(../static/footer_images/shield.jpg);
    }
    &:nth-child(3) {
      background-image: url(../static/footer_images/collection1.jpg);
    }
    &:nth-child(4) {
      background-image: url(../static/footer_images/garden.jpg);
    }
    &:nth-child(5) {
      background-image: url(../static/footer_images/sew.jpg);
    }
    &:nth-child(6) {
      background-image: url(../static/footer_images/collection2.jpg);
    }
    &:nth-child(7) {
      background-image: url(../static/footer_images/kater_schroeder.jpg);
    }
    &:nth-child(8) {
      background-image: url(../static/footer_images/flower.jpg);
    }
    &:nth-child(9) {
      background-image: url(../static/footer_images/texture.jpg);
    }
    &:nth-child(10) {
      background-image: url(../static/footer_images/lamp.jpg);
    }
  }
}

footer {
  color: #fff !important;
}
</style>
