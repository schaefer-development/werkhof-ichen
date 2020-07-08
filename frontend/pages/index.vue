<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <seminar-tile
        v-for="seminar in seminars"
        :key="seminar.id"
        :seminar="seminar"
      >
      </seminar-tile>
    </v-flex>
  </v-layout>
</template>

<script>
import SeminarTile from '../components/SeminarTile.vue'

export default {
  components: {
    SeminarTile,
  },
  data() {
    return {
      seminars: [
        {
          id: 1,
          title: 'Testseminar Title',
          created_at: '2020-07-08T14:21:03.862Z',
          updated_at: '2020-07-08T14:23:50.817Z',
        },
        {
          id: 2,
          title: 'Zweiter Testseminar Title',
          created_at: '2020-07-08T14:24:11.487Z',
          updated_at: '2020-07-08T14:24:11.487Z',
        },
      ],
    }
  },
}
</script>
