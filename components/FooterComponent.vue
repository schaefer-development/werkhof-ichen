<template>
  <v-footer padless>
    <div class="footerWrapper flex flex-col">
      <div class="footerImages w-full flex flex-wrap">
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/house.jpg"
          alt="Werkhof Ichen"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/tea_pot.jpg"
          alt="Tea Time"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/flower3.jpg"
          alt="Blumen"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/collection3.jpg"
          alt="Collection"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/physalis.jpg"
          alt="Physalis"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/sew.jpg"
          alt="Nähen"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/kater_schroeder.jpg"
          alt="Kater Schrdöer"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/flower.jpg"
          alt="Werkhof Ichen"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/stone.jpg"
          alt="Textur"
        />
        <img
          class="w-[20%] md:w-[10%] aspect-square"
          src="/footer_images/lamp.jpg"
          alt="Lampe"
        />
      </div>

      <div
        class="footerContact w-full max-w-xl mx-auto py-12 px-2 flex flex-row items-center justify-center"
      >
        <div class="left w-full h-full flex items-center justify-center">
          <img
            class="w-6/12 max-w-[180px]"
            src="/logo_ichen_outline.svg"
            alt="Logo Werkhof Ichen"
          />
        </div>
        <div class="right w-full text-white text-sm px-2">
          <p>
            <a href="tel:+4922463197" class="text-white">02246 . 31 97</a>
            <br />
            <a href="mailto:info@werkhof-ichen.de" class="text-white"
              >info@werkhof-ichen.de</a
            >
          </p>
          <p>
            <nuxt-link to="/datenschutz" class="text-white"
              >Datenschutz</nuxt-link
            >
            <br />
            <nuxt-link to="/impressum" class="text-white">Impressum</nuxt-link>
            <br />
            <nuxt-link to="/agb" class="text-white">AGB</nuxt-link>
            <br />
            Copyright {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<style scoped>
footer {
  background-color: rgba(54, 47, 43, 0.93) !important;
}

.right a {
  color: white;
}
</style>
