<template>
  <v-navigation-drawer v-model="drawer" temporary app color="ichen_blue" width="62%">
    <v-row justify="end" class="pr-2">
      <v-btn icon class="pa-8 mr-0" @click.stop="toggleDrawer">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center">
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
        <v-icon color="ichen_blue" medium>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        text
        link
        target="_blank"
        class="pl-0 pr-0 sm_link"
        href="https://www.instagram.com/irmina_schmitz/?hl=de"
      >
        <v-icon color="ichen_blue" medium>mdi-instagram</v-icon>
      </v-btn>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
}
</script>


<style lang="scss" scoped>
.v-navigation-drawer__content {
  > div:first-child {
    align-items: flex-end;
    color: #fff;
    .v-btn {
      background-color: none !important;
      color: #fff;
      &:hover {
        color: $ichen_red;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    a {
      font-family: 'Overlock';
      font-style: normal;
      font-weight: 900;
      color: #fff;
    }
    .v-item-group {
      .v-expansion-panel {
        text-align: center;

        button.v-expansion-panel-header {
          font-family: 'Overlock';
          font-style: normal;
          font-weight: 900;
          width: auto;
        }
        .v-expansion-panel-content {
        }
      }
    }
  }
}
</style>