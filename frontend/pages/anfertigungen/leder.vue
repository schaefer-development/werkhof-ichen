<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <v-img
          src="https://res.cloudinary.com/dk6nbbr6c/image/upload/v1597151779/ichen/header_leather_osru49.jpg"
          alt="werkhof ichen: Eine Auswahl von Leder"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card rounded="0" flat class="ichen_green">
          <v-card-text class="white--text">
            <ul class="aside_navi">
              <li>
                <h2 class="white--text">Anfertigungen</h2>
              </li>
              <li>
                <h3>
                  <nuxt-link to="/anfertigungen/leder">Leder</nuxt-link>
                </h3>
              </li>
              <li>
                <h3>
                  <nuxt-link to="/anfertigungen/weitere_textilien">Weitere Textilien</nuxt-link>
                </h3>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="ichen_beige">
          <v-card-title>Leder</v-card-title>
          <v-card-text>
            <p>Ich verarbeite nur:</p>
            <ul>
              <li>öko-gegerbte Leder</li>
              <li>ohne Einsatz von AZO-Farbstoffen</li>
              <li>
                mit waschbaren Fettstoffen ausgerüstete, somit leicht zu
                pflegende Leder
              </li>
              <li>
                mit hochwertigen, lichtbeständigen Farbstoffen im Fass
                durchgefärbte Häute
              </li>
            </ul>
            <br />
            <p>
              Das Rinderleder stammt aus Deutschland oder Österreich.
              Büffelleder aus Thailand wird hier in Deutschland ökogerecht
              weiterbearbeitet.
            </p>
            <h3>Anfertigung einer Lederhose</h3>
            <p>
              Anhand von Farbkarten und Mustern kann sich der Kunde die Lederart
              und -farbe aussuchen. Nach Modellabsprache und dem Maßnehmen folgt
              das Nähen eines Probemodells aus Nesselstoff, um die Passform zu
              kontrollieren. Nach bestandener Anprobe wird die Hose in Leder
              genäht.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
