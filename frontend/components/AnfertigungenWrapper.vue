<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <slot name="banner"></slot>
      </v-col>
    </v-row>
    <v-row class="align-baseline">
      <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4" class="subnavi_left">
        <v-card rounded="0" flat class="ichen_green">
          <v-card-title class="text-h2 px-8">Anfertigungen</v-card-title>
          <v-card-text class="white--text px-0">
            <div class="submenu_divider"></div>
            <p>
              <v-list flat nav color="transparent" class="px-0">
                <v-list-item
                  nuxt
                  link
                  to="/anfertigungen/leder"
                  class="white--text text-h3 ma-0 px-8"
                  >Leder</v-list-item
                >
                <v-list-item
                  nuxt
                  link
                  to="/anfertigungen/weitere_textilien"
                  class="white--text text-h3 ma-0 px-8"
                  >Weitere Textilien</v-list-item
                >
              </v-list>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="8" lg="8" xl="8">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.subnavi_left {
  .v-card {
    .v-card__text {
      .submenu_divider {
        border-bottom: 1px dashed #fff;
        width: 90%;
        margin: auto;
      }
      p {
        .v-list {
          a {
            color: #fff !important;
            border-radius: 0 !important;
            &:hover {
              background-color: $ichen_green_dark !important;
            }
            &.v-list-item--active {
              color: $ichen_red !important;
            }
          }
        }
      }
    }
  }
}
</style>
