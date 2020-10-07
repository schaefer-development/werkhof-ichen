<template>
  <anfertigungen-wrapper>
    <template v-slot:banner>
      <v-img
        src="https://res.cloudinary.com/dk6nbbr6c/image/upload/v1597151779/ichen/header_leather_osru49.jpg"
        alt="werkhof ichen: Eine Auswahl von Leder"
      />
    </template>
    <v-card rounded="0" flat>
      <v-card-title class="text-h2">Leder</v-card-title>
      <v-card-text>
        <p>Ich verarbeite nur:</p>
        <ul>
          <li>öko-gegerbte Leder</li>
          <li>ohne Einsatz von AZO-Farbstoffen</li>
          <li>
            mit waschbaren Fettstoffen ausgerüstete, somit leicht zu pflegende
            Leder
          </li>
          <li>
            mit hochwertigen, lichtbeständigen Farbstoffen im Fass durchgefärbte
            Häute
          </li>
        </ul>
        <br />
        <p>
          Das Rinderleder stammt aus Deutschland oder Österreich. Büffelleder
          aus Thailand wird hier in Deutschland ökogerecht weiterbearbeitet.
        </p>
        <v-img
          class="py-12 mx-auto"
          src="/schriftzug_werkstatt.jpg"
          alt="Schriftzug Werkhof"
          contain
          justify="center"
          width="100%"
          max-width="800px"
        />

        <strong>Anfertigung einer Lederhose</strong>
        <p>
          Anhand von Farbkarten und Mustern kann sich der Kunde die Lederart und
          -farbe aussuchen. Nach Modellabsprache und dem Maßnehmen folgt das
          Nähen eines Probemodells aus Nesselstoff, um die Passform zu
          kontrollieren. Nach bestandener Anprobe wird die Hose in Leder genäht.
        </p>
      </v-card-text>
      <v-img
        class="py-8 mx-auto"
        src="/leather_trousers_collection_01.jpg"
        alt="Lederhosen für Kinder"
        contain
        justify="center"
        width="100%"
        max-width="500px"
      />
      <v-card-text>
        <h3 class="pt-6">Kinderlederhose</h3>
        <v-simple-table class="b-8">
          <thead>
            <tr>
              <th class="text-left">Größe</th>
              <th class="text-left">Preis in Euro</th>
              <th class="text-left">Seitenlänge in cm</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in kinderlederhosen" :key="item.groesse">
              <td>{{ item.groesse }}</td>
              <td>{{ item.preis }}</td>
              <td>{{ item.seitenlaenge }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <p>
          Mit Strickbündchen am Hosensaum: 10 Euro Aufpreis
          <br />Verlängerung bis 8 cm: 15 Euro
          <br />Schmutzfang: 15 Euro
          <br />Ledermix: 10 Euro
        </p>
        <p>
          Spezielle Modellwünsche oder Sonderanfertigungen nach Absprache
          möglich.
        </p>
        <p>
          Durch die großzügige Schnittführung der Hose hat das Kind genügend
          Bewegungsfreiheit und eine vernünftige Passform über mehrere Jahre mit
          entsprechender Hosenverlängerung.
        </p>
        <p>Alle Produkte aus meiner Werkstatt sind Unikate!</p>
      </v-card-text>
      <v-img
        class="py-8 mx-auto"
        src="/leather.jpg"
        alt="Lederhosen für Kinder"
        contain
        justify="center"
        width="100%"
        max-width="500px"
      />
      <v-card-text>
        <h3 class="pt-6">Lederhosen für Erwachsene</h3>
        <h4>Damengröße 38 oder Herrengröße 48</h4>

        <v-simple-table class="py-12">
          <thead>
            <tr>
              <th class="text-left">Material</th>
              <th class="text-left">Preis in Euro</th>
              <th class="text-left">Pro Größe aufwärts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in erwachsenenlederhosen" :key="item.material">
              <td>{{ item.material }}</td>
              <td>{{ item.preis }}</td>
              <td>{{ item.preis_plus_pro_groesse }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
      <v-img
        class="py-3 mx-auto"
        src="/leather_trouser_04.jpg"
        alt="Lederhosen für Erwachsene"
        contain
        justify="center"
        width="100%"
        max-width="500px"
      />
      <v-card-text>
        <h3 class="pt-6">Lederjacke für Erwachsene</h3>
        <h4>Damengröße 38 oder Herrengröße 48</h4>
        <v-simple-table class="py-8">
          <thead>
            <tr>
              <th class="text-left">Material</th>
              <th class="text-left">Preis in Euro</th>
              <th class="text-left">Pro Größe aufwärts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in erwachsenenlederjacke" :key="item.material">
              <td>{{ item.material }}</td>
              <td>{{ item.preis }}</td>
              <td>{{ item.preis_plus_pro_groesse }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <p>
          Da ich auf die individuellen Wünsche meiner Kunden eingehe, kann ich
          nur Circa-Preise angeben.
        </p>
        <p>
          Bei zusätzlichen Details muß ggf. Mehraufwand berechnet werden.
          <br />Preise für Kleidungsstücke aus anderen Materialien werden
          vereinbart.
        </p>
        <p>Alle hier angegebenen Preise sind ohne Gewähr.</p>
      </v-card-text>
    </v-card>
  </anfertigungen-wrapper>
</template>

<script>
import AnfertigungenWrapper from '~/components/AnfertigungenWrapper'

export default {
  components: {
    AnfertigungenWrapper,
  },
  data() {
    return {
      kinderlederhosen: [
        {
          groesse: '86',
          preis: 106,
          seitenlaenge: 49,
        },
        {
          groesse: '92',
          preis: 112,
          seitenlaenge: 54,
        },
        {
          groesse: '98',
          preis: 118,
          seitenlaenge: 59,
        },
        {
          groesse: '104',
          preis: 124,
          seitenlaenge: 64,
        },
        {
          groesse: '110',
          preis: 130,
          seitenlaenge: 69,
        },
        {
          groesse: '116',
          preis: 136,
          seitenlaenge: 74,
        },
        {
          groesse: '122',
          preis: 142,
          seitenlaenge: 79,
        },
      ],

      erwachsenenlederhosen: [
        {
          material: 'Rindleder (Glatt/ Nubuk)',
          preis: 'ca. 600',
          preis_plus_pro_groesse: '+ 25 Euro',
        },
        {
          material: 'Rehbock',
          preis: 'ca. 800',
          preis_plus_pro_groesse: '+ 40 Euro',
        },
        {
          material: 'Hirsch',
          preis: 'ca. 950',
          preis_plus_pro_groesse: '+ 45 Euro',
        },
        {
          material: 'Elch',
          preis: 'ca. 1050',
          preis_plus_pro_groesse: '+ 50 Euro',
        },
      ],

      erwachsenenlederjacke: [
        {
          material: 'Rindleder (Glatt/ Nubuk)',
          preis: 'ca. 850',
          preis_plus_pro_groesse: '+ 35 Euro',
        },
        {
          material: 'Rehbock',
          preis: 'ca. 1100',
          preis_plus_pro_groesse: '+ 45 Euro',
        },
        {
          material: 'Hirsch',
          preis: 'ca. 1300',
          preis_plus_pro_groesse: '+ 55 Euro',
        },
        {
          material: 'Elch',
          preis: 'ca. 1400',
          preis_plus_pro_groesse: '+ 60 Euro',
        },
      ],
    }
  },
      head() {
    return {
      title: ' | Anfertigungen: Leder',
    }
  },
}
</script>

<style lang="scss" scoped>
table {
  thead tr th {
    border-bottom: 2px solid $ichen_brown !important;
  }
  tbody tr {
    &:last-child td {
      border-bottom: none !important;
    }
    td {
      width: 33% !important;
      border-bottom: 1px solid $ichen_brown !important;
    }

    &:hover td {
      background-color: $ichen_yellow;
    }
  }
}
</style>
