import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error `config` is Vite's config
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/eslint',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: 'Osaka RubyKaigi 04',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Federo&family=Raleway:ital,wght@0,100..900;1,100..900&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap',
          crossorigin: '',
        },
      ],
    },
    baseURL: '/osaka04/',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
