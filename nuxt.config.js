const isProd = process.env.NODE_ENV === 'production'
const settings = require('./config/settings.json')

async function generateRoutes() {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['path', 'alias']).fetch()

  const routes = files.map((file) => (file.path === '/index' ? '/' : file.path))

  return routes
}

export default {
  telemetry: false,
  // pageTransition: {
  //   name: 'fade',
  //   mode: 'fade'
  // },

  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: settings.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: settings.description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: settings.keywords,
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: '/ms-icon-144x144.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Signika:wght@300;400;500;600;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/store-init.js' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    // { src: '~/plugins/vue-anouncer', mode: 'client' },
    // '~/plugins/components.js',
    // '~/plugins/components.js',
    // '~/plugins/preview.client.js'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sentry',
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {},
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    // [
    //   'storyblok-nuxt',
    //   {
    //     accessToken: process.env.STORYBLOK_KEY,
    //     cacheProvider: 'memory'
    //   }
    // ],
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: [
        '~/plugins/remark-responsive-images.js',
        '~/plugins/remark-embeds.js',
      ],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      plugins: isProd ? ['transform-remove-console'] : [],
    },
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: ['babel-loader', 'vue-svg-loader'],
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      })
    },
  },
  generate: {
    fallback: true,
    async routes() {
      return generateRoutes()
    },
  },
  router: {
    linkActiveClass: 'link-parent-active',
    linkExactActiveClass: 'link-active',
  },
  sitemap: {
    hostname: settings.urls[process.env.NODE_ENV],
    gzip: true,
    routes: async () => await generateRoutes(),
  },
  /* More information on the PWA module: https://pwa.nuxtjs.org/ */
  pwa: {
    workbox: {
      enabled: true,
      autoRegister: true,
      offline: false,
    },
    manifest: {
      name: settings.title,
      short_name: 'GSR e.V.',
      description: settings.description,
      theme_color: '#fff',
      appleStatusBarStyle: 'white',
      ogImage: '/media/2020/10/social-banner-2020-5.jpg',
    },
  },
}
