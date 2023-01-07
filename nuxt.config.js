require('dotenv').config()

const HYGRAPH_HOST = process.env.HYGRAPH_HOST
const FUNCTIONS_HOST = process.env.FUNCTIONS_HOST || 'http://localhost:9999/.netlify/functions'
const clientUrl = process.env.URL || 'http://localhost:3000'

const colors = {
  primary: '#000000',
  error: '#E0124D',
  secondary: '#ECE1CB',
  ichen_beige: '#ece1cb',
  ichen_sand: '#debd88',
  ichen_yellow: '#e5bc80',
  ichen_green: '#709726',
  ichen_blue: '#2a434c',
  ichen_red: '#e0124d',
  ichen_brown: '#48413d',
}


const description =
  'werkhof ichen Lohmar: Nähkurse für Kinder/ Jugendliche/ Erwachsene, Geburtstag-Näh-Events, großzügiges Platzangebot, Anfertigungen, Kinderlederhosen'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'werkhof ichen %s',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@mdi/font/css/materialdesignicons.css', '@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~plugins/formatDate.js', '~plugins/responsiveImages.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/netlify-files', 'nuxt-graphql-request', '@nuxt/postcss8'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  axios: {
    proxy: process.env.NODE_ENV !== 'production'
  },

  markdownit: {
    injected: true,
  },

  pwa: {
    meta: {
      lang: 'de',
      description,
    },
  },

  manifest: {
    name: 'werkhof ichen',
    short_name: 'ichen',
    theme_color: colors.ichen_blue,
    background_color: colors.ichen_beige,
    lang: 'de',
  },

  /* sitemap */
  sitemap: {
    hostname: clientUrl,
    gzip: true,
  },

  // use proxy module only for development - on production we use _redirects
  proxy: {
    '/graphql/': {
      target: HYGRAPH_HOST,
      pathRewrite: { '^/graphql/': '' },
    },
    '/functions/': {
      target: FUNCTIONS_HOST,
      pathRewrite: { '^/functions/': '' },
    },
  },

  graphql: {
    clients: {
      default: {
        endpoint: HYGRAPH_HOST,
      },
    },
  },

  /** loading: false, **/

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    theme: {
      themes: {
        light: {
          accent: colors.ichen_green,
          success: colors.ichen_green,
          warning: colors.error,
          info: colors.ichen_blue,
          ...colors,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['mapbox-gl-controls/lib/styles'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
