const pkg = require('./package')
const i18n = require('./config/locales')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['bootstrap-vue/nuxt', {css: false}],
    ['nuxt-i18n', i18n]
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-swal'
  ],

  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue-swal'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
