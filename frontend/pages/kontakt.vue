<template>
  <v-container>
    <v-row class="pb-xs-6 pb-md-6">
      <v-col>
        <div id="map"></div>
      </v-col>
    </v-row>
    <v-row class="align-baseline">
      <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
        <v-card rounded="0" flat class="ichen_green">
          <v-card-title>Anschrift</v-card-title>
          <v-card-text class="white--text">
            <p>
              werkhof ichen
              <br />Im alten Breidt 11a <br />53797 Lohmar-Breidt
              <br />
            </p>
            <p>
              Telefon: 02246 . 31 97
              <br />E-Mail:
              <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="8" lg="8" xl="8">
        <v-card rounded="0" flat class="ichen_beige">
          <v-card-title>Anfahrt</v-card-title>
          <v-card-text>
            <strong>Von Köln kommend:</strong>
            <p>
              Abfahrt von der A3 "Rösrath/ Lohmar-Nord", an der nächsten
              T-Kreuzung rechts, ca. 9 Km geradeaus, dann dem Hinweisschild
              "Breidt/ Geber" nach links folgen, nächste T-Kreuzung rechts, in
              Breidt die 1. links, die 2. Möglichkeit rechts, dann liegt der
              "werkhof ichen" nach 50 m auf der linken Seite.
            </p>
            <strong>Von Bonn/ Siegburg kommend:</strong>
            <p>
              Von der B56 Richtung Much links nach "Krahwinkel" abbiegen, den
              Ort durchfahren, geradeaus bis "Breidt", im Ort die 3. Möglichkeit
              rechts abbiegen (J.-Hofer-Weg) die 2. Möglichkeit rechts, dann
              liegt der werkhof ichen nach 50 m auf der linken Seite.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  data() {
    return {
      access_token:
        'pk.eyJ1Ijoiam9zZW4iLCJhIjoiY2llcXQ4aTd0MDEzaHZ4a21jejVrcHdyMiJ9.SPCThtA30WGuMPwFxju_8w',
      map: {},
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/josen/ckd5rgq6z0vwx1ir38367xhb1',
        zoom: 11.5,
        center: [7.2719627, 50.8557119],
        minZoom: 2,
        maxZoom: 20,
      })
      this.map.addControl(new mapboxgl.NavigationControl())
      new mapboxgl.Marker({
        color: '#e0124d',
      })
        .setPopup(
          new mapboxgl.Popup().setHTML(`
      <p>
      <strong>werkhof ichen</strong><br>
      ichen Schmitz<br>
      Im alten Breidt 11a<br>
      53797 Lohmar-Breidt<br>
      
      Telefon: 02246 . 31 97<br>
      E-Mail: <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a><br>
      
      </p>`)
        )
        .setLngLat([7.2719627, 50.8557119])
        .addTo(this.map)
    },
  },
}
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 40vh;
  max-height: 450px;
}

.mapboxgl-popup-content {
  button.mapboxgl-popup-close-button {
    font-size: 24px;
    font-weight: bold;
    color: #2a434c;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: transparent !important;
      border: none !important;
    }
    &:active,
    &:focus {
      background-color: transparent !important;
      border: none !important;
    }
  }
  p {
    font-size: 14px;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    strong {
      font-family: 'Overlock';
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      color: #2a434c;
    }
  }
}
</style>
