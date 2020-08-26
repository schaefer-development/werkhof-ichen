<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <slot name="banner"></slot>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        class="subnavi_left"
      >
        <v-card rounded="0" flat class="ichen_green pa-3">
          <v-card-title class="white--text text-h2">Anfertigungen</v-card-title>
          <div class="submenu_divider"></div>
          <v-card-text>
            <v-list class="white--text" flat nav color="transparent">
              <v-list-item nuxt link to="/anfertigungen/leder">
                <strong>Leder</strong>
              </v-list-item>
              <v-list-item nuxt link to="/anfertigungen/weitere_textilien">
                <strong>Weitere Textilien</strong>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.submenu_divider {
  border-bottom: 1px dashed #fff;
}
</style>
