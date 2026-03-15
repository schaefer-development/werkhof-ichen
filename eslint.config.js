import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

const nuxtGlobals = {
  defineNuxtConfig: 'readonly',
  defineProps: 'readonly',
  defineEmits: 'readonly',
  defineExpose: 'readonly',
  withDefaults: 'readonly',
  useAsyncData: 'readonly',
  useRoute: 'readonly',
  useRouter: 'readonly',
  useHead: 'readonly',
  useNuxtApp: 'readonly',
  useRuntimeConfig: 'readonly',
  $fetch: 'readonly',
  ref: 'readonly',
  reactive: 'readonly',
  computed: 'readonly',
  onMounted: 'readonly',
}

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      '.nuxt',
      'public',
      '.netlify',
      '**/.netlify/**',
      'netlify/**',
      'backups',
    ],
  },
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: (await import('vue-eslint-parser')).default,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...nuxtGlobals,
      },
    },
    rules: {
      'vue/no-useless-template-attributes': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-indent': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-closing-bracket-newline': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...nuxtGlobals,
      },
    },
  },
]
