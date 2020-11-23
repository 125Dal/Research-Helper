import { NuxtConfig } from '@nuxt/types'

const configuration: NuxtConfig = {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Nuxt.Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase'
  ],

  // Firebase Configuration
  firebase: {
    config: {
      apiKey: 'AIzaSyDwMijHRGOfnPQ7ME8D192EpqzeBXlty-0',
      authDomain: 'research-helper-app.firebaseapp.com',
      databaseURL: 'https://research-helper-app.firebaseio.com',
      projectId: 'research-helper-app',
      storageBucket: 'research-helper-app.appspot.com',
      messagingSenderId: '293593523120',
      appId: '1:293593523120:web:e7f80abde82b8f54af6c75',
      measurementId: 'G-GPV0H8CHJK'
    },
    services: {
      auth: true,
      firestore: true,
      storage: true
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}

export default configuration
