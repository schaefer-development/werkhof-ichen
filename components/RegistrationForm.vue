<template>
  <v-card id="registration-form" rounded="0" flat class="px-0 pt-4">
    <v-card-text>
      <div id="alert-wrapper">
        <v-alert v-if="success" type="success">
          <template v-if="available">
            <!-- -->
            <!-- -->
            <span class="font-weight-bold">DAS HAT GEKLAPPT!</span>
            <h3 class="py-6 ichen_blue--text text-h2">
              Erfolgreich angemeldet für:
              <br />
              {{ veranstaltung.titel }}
            </h3>
            <!-- -->
          </template>
          <template v-else>
            <!-- -->
            <span class="font-weight-bold">DAS HAT GEKLAPPT!</span>
            <h3 class="py-6 ichen_blue--text text-h2">
              Erfolgreich zur Warteliste hinzugefügt:
              <br />
              {{ veranstaltung.titel }}
            </h3>
            <!-- -->
          </template>
          <p>
            Sie erhalten in den nächsten Minuten eine Bestätigungsmail mit allen
            weiteren Details. Wenn Sie keine Nachricht erhalten haben, schauen
            Sie auch bitte einmal in Ihrem Spamordner nach.
          </p>
          <p>
            Falls Sie keine Bestätigungsmail erhalten haben, nehmen Sie bitte
            Kontakt mit mir auf:
            <br />Telefon: 02246 . 31 97 oder per E-Mail:
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>
          </p>
          <p>
            <v-btn variant="flat" color="ichen_blue white--text" @click="confirm"
              >Verstanden</v-btn
            >
          </p>
        </v-alert>

        <v-form v-else v-model="valid">
          <p class="text-right my-0">
            <v-btn
              fab
              variant="flat"
              small
              dark
              aria-label="Abbrechen"
              color="ichen_blue"
              @click="cancel"
            >
              <v-icon dark>mdi-close</v-icon>
            </v-btn>
          </p>
          <v-card-title class="ichen_blue--text text-h2 px-0">{{
            veranstaltung.titel
          }}</v-card-title>
          <div
            class="event_detail ichen_brown--text font-weight-bold"
            v-html="$md.render(veranstaltung.anzeigedatum)"
          ></div>

          <div class="event_detail ichen_brown--text font-weight-bold">
            {{ veranstaltung.preis }} € (plus Materialkosten)<br>
            Maximale Teilnehmeranzahl: {{ veranstaltung.maximaleAnzahlTeilnehmer }}
          </div>


          <div class="w-full max-w-[400px] h-12 py-12 mx-auto flex items-center justify-center">
                <img src="/sewing_needle_brown.svg" alt="Nähnadel" />
              </div>
          <p v-html="veranstaltung.beschreibung.html"></p>

          <!-- -->
          <div class="w-full max-w-[400px] h-12 py-12 mx-auto flex items-center justify-center">
                <img src="/sewing_needle_brown.svg" alt="Nähnadel" />
              </div>
          <p class="pt-6 pb-3 ma-0">
            <template v-if="available">
              <strong class="ichen_green--text">
                <v-icon color="ichen_green" class="pr-1"
                  >mdi-check-circle</v-icon
                >Noch Plätze frei
              </strong>
            </template>
            <template v-else>
              <strong class="error--text">
                <v-icon color="error" class="pr-1">mdi-alert-circle</v-icon
                >Aktuell sind alle Plätze belegt, es gibt aber eine WARTELISTE.
              </strong>
              <br />
            </template>
          </p>
          <!-- -->
          <h3 class="ichen_blue--text text-h2">
            <template v-if="available">Anmeldeformular</template>
            <template v-else>Auf Warteliste setzen</template>
          </h3>
          <p></p>
          <v-text-field
            v-model="anmeldung.name"
            variant="outlined"
            :rules="requiredRules"
            required
            label="Vor- und Nachname"
            @change="normalize"
          ></v-text-field>

          <v-text-field
            v-model="anmeldung.email"
            variant="outlined"
            :rules="emailRules"
            required
            label="E-Mailadresse (beispiel@beispiel.de – keine Leerzeichen)"
            @change="normalize"
          ></v-text-field>
          <v-text-field
            v-model="anmeldung.telefonNummer"
            variant="outlined"
            :rules="phoneNumberRules"
            label="Telefonnummer"
            @change="normalize"
          ></v-text-field>
          <v-text-field
            v-model="anmeldung.strasseHausnummer"
            variant="outlined"
            @change="normalize"
          >
            <template v-slot:label>
              <div>
                <div>Straße und Hausnummer</div>
                <small>(optional)</small>
              </div>
            </template>
          </v-text-field>
          <v-text-field v-model="anmeldung.plzOrt" variant="outlined" @change="normalize">
            <template v-slot:label>
              <div>
                <div>Postleitzahl und Ort</div>
                <small>(optional)</small>
              </div>
            </template>
          </v-text-field>
          <v-checkbox v-model="agb" :rules="agbRules" required>
            <template v-slot:label>
              <div>
                <div>
                  Ich habe die
                  <nuxt-link to="/agb">AGB</nuxt-link>&nbsp;und die
                  Informationen zum
                  <nuxt-link to="/datenschutz">Datenschutz</nuxt-link
                  >&nbsp;gelesen und stimme beiden zu.
                </div>
              </div>
            </template>
          </v-checkbox>
          <client-only>
            <vue-hcaptcha :sitekey="HCAPTCHA_SITEKEY" @verify="verify"></vue-hcaptcha>
          </client-only>
          <v-alert variant="text" type="info" class="font-weight-bold mt-4 mb-10">
            <template v-if="available"
              >Ihr Platz ist erst mit Zahlungseingang reserviert.</template
            >
            <template v-else>
              Sobald ein Platz frei wird, melde ich mich bei Ihnen telefonisch
              oder per E-Mail.
            </template>
          </v-alert>
          <v-alert v-if="error" variant="text" type="error" class="font-weight-bold">
            Ups, da ist etwas schief gelaufen. Bitte versuchen Sie es erneut und
            wenn das Problem weiterhin besteht, kontaktieren Sie mich bitte per
            E-Mail an
            <a href="mailto:info@werkhof-ichen.de">info@werkhof-ichen.de</a>.
          </v-alert>

          <v-btn
            class="mr-4 mb-4"
            variant="flat"
            color="ichen_red white--text"
            :disabled="!valid || !anmeldung.hCaptchaResult"
            :loading="loading"
            @click="submit"
            >{{ available ? 'Anmelden' : 'Auf Warteliste setzen' }}</v-btn
          >
          <v-btn
            variant="flat"
            class="mb-4"
            color="ichen_blue white--text"
            @click="cancel"
            >Abbrechen</v-btn
          >
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
import { useGoTo } from 'vuetify'
import isAvailable from '~/helpers/isAvailable.js'

// eslint-disable-next-line no-useless-escape
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const props = defineProps({
  veranstaltung: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['confirm', 'cancel'])
const goTo = useGoTo()
const config = useRuntimeConfig()
const HCAPTCHA_SITEKEY = config.public.hcaptchaSitekey

const valid = ref(true)
const anmeldung = reactive({
  hCaptchaResult: '',
  name: '',
  email: '',
  telefonNummer: '',
  plzOrt: '',
  strasseHausnummer: '',
})
const agb = ref(false)
const success = ref(false)
const error = ref(false)
const loading = ref(false)

const requiredRules = [(v) => !!v || 'Muss ausgefüllt werden']
const phoneNumberRules = [
  (v) => !!v || 'Muss ausgefüllt werden',
  (v) =>
    /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(v) ||
    'muss gültig sein',
]
const emailRules = [
  (v) => !!v || 'Muss ausgefüllt werden',
  (v) => emailRegExp.test(v) || 'Muss gültig sein',
]
const agbRules = [(v) => !!v || 'Sie müssen den AGB zustimmen, um fortzufahren']

const available = computed(() => isAvailable(props.veranstaltung))

const confirm = () => emit('confirm')
const cancel = () => emit('cancel')

const normalize = () => {
  for (const key in anmeldung) {
    const value = anmeldung[key]
    if (typeof value === 'string') {
      anmeldung[key] = value.trim()
    }
  }
}

const verify = (hCaptchaResult) => {
  anmeldung.hCaptchaResult = hCaptchaResult
}

const submit = async () => {
  loading.value = true
  error.value = false

  const payload = {
    ...anmeldung,
    veranstaltung: props.veranstaltung,
  }

  try {
    await $fetch(`${config.public.functionsHost}/register/`, {
      method: 'POST',
      body: payload,
    })
    success.value = true
    goTo('#alert-wrapper', { duration: 0 })
  } catch (err) {
    console.log(err)
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
