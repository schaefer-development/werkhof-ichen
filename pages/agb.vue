<template>
  <v-container>
    <v-row class="pb-xs-6">
      <v-col cols="12">
        <v-img
          src="/header_images/header_spiral.jpg"
          alt="werkhof ichen: Auswahl von Leder"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4"></v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        offset-md="4"
        md="8"
        offset-lg="4"
        lg="8"
        offset-xl="4"
        xl="8"
      >
        <v-card rounded="0" flat>
          <v-card-title class="text-h2"
            >Allgemeine Geschäftsbedingungen (AGB)</v-card-title
          >
          <v-card-text>
            <h3 class="pt-3">
              Zu jedem fairen Angebot gehören ein paar Spielregeln:
            </h3>
            <h3 class="pt-8">Anmeldung:</h3>
            <p>
              Ihre Anmeldung wird gültig mit dem Zahlungseingang der
              Teilnahmegebühr auf meinem Konto. Bei ausfallender Zahlung
              verfällt der Teilnehmerplatz.
            </p>
            <h3 class="pt-3">Ausfall eines Kurses:</h3>
            <p>
              Bitte geben Sie bei der Anmeldung Ihre vollständigen Kontaktdaten
              an, damit ich Sie benachrichtigen kann, falls Ihr Kurs nicht
              stattfinden sollte. Die Kursgebühr wird in diesem Fall umgehend
              erstattet.
            </p>
            <h3 class="pt-3">Datenschutz:</h3>
            <p>
              Ihre Daten werden bei mir vertraulich behandelt. Die Daten werden
              ausdrücklich nicht an Dritte weitergegeben. Gleichzeitig gestatten
              Sie mir Ihre Daten in meine Kartei aufzunehmen für die
              Kommunikation mit Ihnen und die zukünftige Bekanntgabe aktueller
              Informationen aus dem werkhof ichen.
            </p>
            <h3 class="pt-3">Haftung:</h3>
            <p>
              Haben Sie bitte Verständnis dafür, dass ich eine Haftung für
              Diebstahl, Verlust von Gegenständen oder Personenschäden während
              des Aufenthaltes in meinen Geschäftsräumen ausschließen muss.
            </p>
            <h3 class="pt-3">Rücktritt:</h3>
            <p>
              Sollten Sie einen gebuchten Kurs – aus welchen Gründen auch immer
              – nicht besuchen können, gelten die folgenden Stornobedingungen:
              Der Rücktritt hat schriftlich zu erfolgen (per Post oder E-Mail).
              Bei Stornierung bis 2 Wochen vor Kursbeginn wird Ihnen die gesamte
              Kursgebühr erstattet. Bitte teilen Sie mir hierfür Ihre
              Bankverbindungen mit. Bitte haben Sie Verständnis, dass ich
              Stornierungen ab dem 13. Tag vor Kursbeginn nicht mehr
              berücksichtigen kann und eine Erstattung der Kursgebühr entfällt.
              Es sei denn es findet sich ein Ersatzteilnehmer.
              <br>
              Wegen Krankheit oder Trauer empfehle ich eine Rücktrittsversicherung abzuschließen. 
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
ol.agb_list {
  li {
    padding: 1em 0 !important;
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: ' | Allgemeine Geschäftsbedingungen (AGB)',
    }
  },
}
</script>
