<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="map">
          <client-only>
            <MglMap
              access-token="pk.eyJ1Ijoiam9zZW4iLCJhIjoiY2llcXQ4aTd0MDEzaHZ4a21jejVrcHdyMiJ9.SPCThtA30WGuMPwFxju_8w"
              map-style="mapbox://styles/josen/ck6z082270ui31jrqttvw5awv"
              :center="[103.863326, 13.354804]"
              :zoom="4.8"
            >
              <MglGeolocateControl ref="geolocateControl" />
            </MglMap>
          </client-only>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.map {
  min-width: 400px;
  width: 100%;
  height: 100px;
}
</style>