<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
        <v-img
          class="w-full aspect-square object-cover object-center"
          :src="veranstaltung.vorschaubild.url"
          :srcset="generateSrcset(veranstaltung.vorschaubild)"
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

<script setup>
import { gql } from 'graphql-request'
import { generateSrcset } from '~/composables/generateSrcset'
import RegistrationForm from '~/components/RegistrationForm'

const { $graphql } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const id = computed(() =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
)

const query = gql`
  query veranstaltung($id: ID!) {
    veranstaltung(where: { id: $id }) {
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
      kategorie
      vorschaubild {
        width
        url
        thumbnail: url(transformation: { image: { resize: { width: 250 } } })
        small: url(transformation: { image: { resize: { width: 500 } } })
        medium: url(transformation: { image: { resize: { width: 750 } } })
        large: url(transformation: { image: { resize: { width: 1000 } } })
      }
      anmeldungen {
        id
      }
    }
  }
`

const { data } = await useAsyncData(`veranstaltung-${id.value ?? 'unknown'}`, () =>
  id.value ? $graphql.request(query, { id: id.value }) : null
)

const veranstaltung = computed(() => data.value?.veranstaltung ?? {})

const back = () => {
  router.back()
}

useHead({
  title: ' | Veranstaltungsdetails',
})
</script>
