require('dotenv').config()

const HYGRAPH_HOST = process.env.HYGRAPH_HOST || ''
const FUNCTIONS_HOST =
  process.env.FUNCTIONS_HOST || 'http://localhost:9999/.netlify/functions'
const clientUrl = process.env.NUXT_PUBLIC_SITE_URL || process.env.URL || 'http://localhost:3000'

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

export default defineNuxtConfig({
  app: {
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
  },
  css: [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/styles',
    '@/assets/css/main.css',
    '@/assets/css/global.scss',
  ],
  plugins: ['~/plugins/markdownit.ts', '~/plugins/graphql.ts'],
  modules: [
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
  ],
  runtimeConfig: {
    hygraphToken: process.env.HYGRAPH_TOKEN || '',
    public: {
      hygraphHost: HYGRAPH_HOST,
      functionsHost: FUNCTIONS_HOST,
      siteUrl: clientUrl,
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN || '',
      hcaptchaSitekey:
        process.env.NUXT_PUBLIC_HCAPTCHA_SITEKEY ||
        process.env.NUXT_ENV_HCAPTCHA_SITEKEY ||
        '',
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'werkhof ichen',
      short_name: 'ichen',
      theme_color: colors.ichen_blue,
      background_color: colors.ichen_beige,
      lang: 'de',
    },
  },

  /* sitemap */
  sitemap: {
    siteUrl: clientUrl,
    gzip: true,
  },
  site: {
    url: clientUrl,
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              accent: colors.ichen_green,
              success: colors.ichen_green,
              warning: colors.error,
              info: colors.ichen_blue,
              ...colors,
            },
          },
        },
      },
    },
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use \"@/assets/variables.scss\" as *;',
        },
      },
    },
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      interval: 250,
      concurrency: 1,
      failOnError: false,
    },
  },
  build: {
    transpile: ['mapbox-gl-controls/lib/styles'],
  },
})
