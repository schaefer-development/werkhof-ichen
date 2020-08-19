<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <slot name="banner"> </slot>
      </v-col>
    </v-row>
    <v-row align="baseline">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        class="subnavi_left"
      >
        <v-card rounded="0" flat class="ichen_green px-3">
          <v-card-title class="white--text">Anfertigungen</v-card-title>
          <v-card-text class="white--text">
            <ul class="aside_navi">
              <li>
                <h3>
                  <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
                </h3>
              </li>
              <li>
                <h3>
                  <nuxt-link to="/anfertigungen/weitere_textilien"
                    >Weitere Textilien</nuxt-link
                  >
                </h3>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>
