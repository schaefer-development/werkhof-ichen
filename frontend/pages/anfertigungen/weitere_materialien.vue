<template>
  <anfertigungen-wrapper>
    <template v-slot:banner>
      <v-img
        src="/header_images/header_other_materials_collage.jpg"
        alt="werkhof ichen: Andere Textilien"
      />
    </template>
    <v-card rounded="0" flat>
      <v-card-title class="text-h2">Weitere Materialien</v-card-title>
      <v-card-text>
        Naturstoffe, wie Walkware aus reiner Wolle, Baumwolle, Leinen, Hanf.
        Auch gewachster Canvas für Taschen usw., gewachste Baumwolle für Jacken,
        Baumwollplüsch zum füttern von Jacken oder Decken, aber auch Mikrofaser,
        Softshell, gummierte Gewebe, Lkw-Plane, alte
        Fahrradschläuche/Feuerwehrschläuche finden Verwendung in meiner
        Werkstatt (ich experimentiere gerne).
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
      head() {
    return {
      title: ' | Anfertigungen: weitere Materialien',
    }
  },
}
</script>


