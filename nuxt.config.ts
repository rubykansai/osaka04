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
      title: '大阪Ruby会議04',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '大阪Ruby会議は、大阪で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '大阪Ruby会議04' },
        { property: 'og:image', content: 'https://rubykansai.github.io/osaka04/ogp.png' },
        { property: 'og:description', content: '大阪Ruby会議は、大阪で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。' },
        { property: 'og:url', content: 'https://regional.rubykaigi.org/osaka04/' },
        { property: 'og:title', content: '大阪Ruby会議04' },
        { name: 'twitter:title', content: '大阪Ruby会議04' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@rubykansai' },
        { name: 'twitter:image', content: 'https://rubykansai.github.io/osaka04/ogp.png' },
        { name: 'twitter:description', content: '大阪Ruby会議は、大阪で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/osaka04/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Federo&family=Raleway:ital,wght@0,100..900;1,100..900&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap',
          crossorigin: '',
        },
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
    },
    baseURL: '/osaka04/',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
