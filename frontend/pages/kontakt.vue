<template>
  <v-container>
    <v-row class="pb-xs-6 pb-md-6">
      <v-col>
        <div id="map"></div>
      </v-col>
    </v-row>
    <v-row class="align-baseline">
      <v-col class="pl-sm-12 pr-sm-12" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <h1 class="text-sm-left text-md-right">Anfahrt</h1>
      </v-col>
      <v-col
        class="pl-sm-12 pr-sm-12"
        cols="12"
        xs="12"
        sm="12"
        md="7"
        offset-md="1"
        lg="7"
        offset-lg="1"
        xl="7"
        offset-xl="1"
      >
        <h2>Von Köln kommend:</h2>
        <p>
          Abfahrt von der A3 "Rösrath/ Lohmar-Nord", an der nächsten T-Kreuzung
          rechts, ca. 9 Km geradeaus, dann dem Hinweisschild "Breidt/ Geber"
          nach links folgen, nächste T-Kreuzung rechts, in Breidt die 1. links,
          die 2. Möglichkeit rechts, dann liegt der "werkhof ichen" nach 50 m
          auf der linken Seite.
        </p>
        <h2>Von Bonn/ Siegburg kommend:</h2>
        <p>
          Von der B56 Richtung Much links nach "Krahwinkel" abbiegen, den Ort
          durchfahren, geradeaus bis "Breidt", im Ort die 3. Möglichkeit rechts
          abbiegen (J.-Hofer-Weg) die 2.Möglichkeit rechts, dann liegt der
          werkhof ichen nach 50 m auf der linken Seite.
        </p>
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
        zoom: 13,
        center: [7.2719627, 50.8557119],
        minZoom: 2,
        maxZoom: 20,
      })
      this.map.addControl(new mapboxgl.NavigationControl())
      new mapboxgl.Marker({
        color: "#e0124d"
      })
      .setPopup(new mapboxgl.Popup().setHTML(`
      <p>
      <strong>werkhof ichen</strong><br>
      Dipl.-Ing. Irmina Maria Schmitz<br>
      Im alten Breidt 11<br>
      53797 Lohmar-Breidt<br>
      </p>`))
      .setLngLat([7.2719627, 50.8557119]).addTo(this.map)
    },
  },
}
</script>

<style>
#map {
  width: 100%;
  height: 40vh;
  max-height: 450px;
}
</style>
