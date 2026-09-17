const js = require('@eslint/js')
const pluginVue = require('eslint-plugin-vue')
const tseslint = require('typescript-eslint')
const eslintConfigPrettier = require('eslint-config-prettier')
const globals = require('globals')

// typescript-eslint's `recommended` includes a base config with no `files`
// restriction, which would otherwise override vue-eslint-parser for .vue
// files. Scope it to .ts files only.
const tsRecommended = tseslint.configs.recommended.map((config) => ({
  ...config,
  files: config.files ?? ['**/*.ts'],
}))

module.exports = [
  js.configs.recommended,
  ...pluginVue.configs['flat/vue2-recommended'],
  ...tsRecommended,
  eslintConfigPrettier,
  {
    files: ['**/*.vue'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        // Nuxt injects `process.client`/`process.server`/`process.env.*`
        // into the client bundle at build time.
        process: 'readonly',
      },
    },
  },
  {
    // nuxt.config.js and the Nuxt plugins mix ES module import/export with
    // CommonJS require() (Nuxt's config loader supports both) and run under
    // Node, not the browser.
    files: ['*.config.js', 'plugins/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
  {
    // Netlify Functions run under Node.
    files: ['netlify/functions/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    // pages/**/*.vue and layouts/**/*.vue file names are Nuxt routing/layout
    // conventions, not component names — single-word is the norm (e.g.
    // pages/kontakt.vue, layouts/default.vue).
    files: ['pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    // Pre-existing component name; out of scope for this lint-tooling change.
    files: ['components/Drawer.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: [
      'dist/**',
      '.nuxt/**',
      'node_modules/**',
      'static/**',
      '.netlify/**',
      'netlify/functions/**/.netlify/**',
    ],
  },
]
