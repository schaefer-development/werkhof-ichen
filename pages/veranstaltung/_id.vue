<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="white--text align-end"
          contain
          aspect-ratio="1"
          :src="veranstaltung.vorschaubild.url"
          sizes="
          (min-width:1904px) 570px,
          (min-width:1264px) 371px,
          (min-width:960px) 276px,
          (min-width:600px) 33vw,
          100vw"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
        <registration-form
          :veranstaltung="veranstaltung"
          @cancel="back"
          @confirm="back"
        ></registration-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
import RegistrationForm from '~/components/RegistrationForm'

export default {
  components: {
    RegistrationForm,
  },
  async asyncData({ $graphql, params }) {
    const query = gql`
      query veranstaltung($id: ID!) {
        veranstaltung(where: {id: $id}) {
          id
          titel
          datum
          preis
          maximaleAnzahlTeilnehmer
          beschreibung {
            html
          }
          anzeigedatum
          kurzbeschreibung
          vorschaubild {
            url
          }
          anmeldungen {
            id
          }
        }
      }
    `
    const { veranstaltung } = await $graphql.default.request(query, params);
    return { veranstaltung }
  },
  methods: {
    back() {
      this.$router.back()
    },
  },
  head() {
    return {
      title: ' | Veranstaltungsdetails',
    }
  },
}
</script>
