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
    ['nuxt-i18n', i18n],
    ['@nuxtjs/axios'],
    ['@nuxtjs/auth']
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-swal'
  ],

  /**
   * Nuxt.js router
   */
  router: {
    middleware: ['auth']
  },
  /**
   * Nuxt.js auth
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get', propertyName: 'data' }
        }
      }
    }
  },

  axios: {
    baseURL: process.env.API_URL || 'http://localhost/ktx/api/v1',
    redirect: {
      callback: '/users'
    },
    requestInterceptor: (config, {store}) => {
      config.headers.common['Authorization'] = 'Bearer ' + store.state.token
      return config
    },
    
    proxyHeaders: false,
    credentials: false,
    redirectError: {
      401: '/login',
      404: '/notfound'
    },
  },

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
