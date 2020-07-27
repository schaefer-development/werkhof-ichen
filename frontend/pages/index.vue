<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="beige" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/footer_images/kater_schroeder.jpg"
          ></v-img>
          <v-card-title>werkhof ichen</v-card-title>
          <v-card-text class="text--primary">
            <div>
              Im werkhof ichen werden Kurse im künstlerischen
              Handwerk veranstaltet.
              Außerdem finden Sie hier die ichen Kollektion,
              maßgefertigte Kleidung und eine erlesene
              Auswahl an Stoffen und Nähutensilien.
              Ich freue mich auf Ihren Kontakt.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>
          </v-card-actions>
          <div class="sloping_edge">
            <div class="primary"></div>
          </div>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card rounded="0" flat class="green" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/footer_images/kater_schroeder.jpg"
          ></v-img>
          <v-card-title>Anfertigungen</v-card-title>
          <v-card-text class="text--primary">
            <div>
              Meine Kollektionen sind zeitlose, individuelle
              Entwicklungen, die nur bedingt den Trends des
              Modemarktes unterworfen sind.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>
          </v-card-actions>
          <div class="sloping_edge">
            <div class="green"></div>
          </div>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="4">
        <v-card pb="12" rounded="0" flat class="blue" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/footer_images/kater_schroeder.jpg"
          ></v-img>
          <v-card-title>Veranstaltungen</v-card-title>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>
          </v-card-actions>
          <p>ldnfln aenfljnasdf lkaenfl asflkanf,mas fl a,f alsd fas,f alr fas flalsd fas,f alr fas flalsd fas,f alr fas fla lf asd,f asd flas df alsdf asd f,asd flasdf</p>
          <div class="sloping_edge">
            <div class="blue"></div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>




<style lang="scss" scoped>
.sloping_edge {
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: -30px;
  overflow: hidden;
  div {
    position: relative;
    background-color: inherit;
    width: 101%;
    border: none;
    display: inline-block;
    height: 28px;

    transform-origin: bottom left;
    -ms-transform: skew(0, -4deg);
    -webkit-transform: skew(0, -4deg);
    transform: skew(0, -4deg);
  }
}
</style>