<template>
  <v-layout>
    <v-container>
      <v-row class="pb-12">
        <v-col>
          <div id="map"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4" justify="end">
          <h1>Anfahrt</h1>
        </v-col>
        <v-col class="col-8">
          <h2>Von Köln kommend:</h2>
          <p>Abfahrt von der A3 "Rösrath/ Lohmar-Nord", an der nächsten T-Kreuzung rechts, ca. 9 Km geradeaus, dann dem Hinweisschild "Breidt/ Geber" nach links folgen, nächste T-Kreuzung rechts, in Breidt die 1. links, die 2. Möglichkeit rechts, dann liegt der "werkhof ichen" nach 50 m auf der linken Seite.</p>
          <h2>Von Bonn/ Siegburg kommend:</h2>
          <p>Von der B56 Richtung Much links nach "Krahwinkel" abbiegen, den Ort durchfahren, geradeaus bis "Breidt", im Ort die 3. Möglichkeit rechts abbiegen (J.-Hofer-Weg) die 2.Möglichkeit rechts, dann liegt der werkhof ichen nach 50 m auf der linken Seite.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  export default {
  data(){
    return{
      access_token : 'pk.eyJ1Ijoiam9zZW4iLCJhIjoiY2llcXQ4aTd0MDEzaHZ4a21jejVrcHdyMiJ9.SPCThtA30WGuMPwFxju_8w',
      map:{}
    }
  },
  mounted(){
    this.createMap()
  },
  methods:{
    createMap(){
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map(
        {
          container: "map",
          style:"mapbox://styles/josen/ckd5rgq6z0vwx1ir38367xhb1",
          zoom:13,
          center: [ 7.2719627, 50.8557119],
          minZoom: 2,
          maxZoom: 20,
        }
      )
      this.map.addControl(new mapboxgl.NavigationControl())
    },
  }
}
</script>


<style>
#map {
  width: 100%;
  height: 450px;
}
</style>


