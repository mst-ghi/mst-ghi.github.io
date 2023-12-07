import AppData from './libs/app'

export default {
  ssr: false,
  target: 'static',
  generate: {
    dir: 'docs',
  },
  head: {
    title: `${AppData.name} (${AppData.nickname})`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'author',
        name: 'author',
        content: AppData.name,
      },
      {
        hid: 'description',
        name: 'description',
        content: AppData.description,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: AppData.name,
      },
      {
        hid: 'og:determiner',
        name: 'og:determiner',
        content: AppData.name,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://mst-ghi.github.io/',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://mst-ghi.github.io/preview.png',
      },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: 'https://mst-ghi.github.io/preview.png',
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: AppData.name,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: AppData.description,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: AppData.name,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://mst-ghi.github.io/',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://mst-ghi.github.io/preview.png',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: AppData.description,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-png', href: '/logo.png' }],
    script: [{ src: '/js/google-tags.js' }, { src: '/js/welcome.js' }],
  },
  css: ['~/assets/css/app.css'],
  plugins: [
    '~/plugins/packages',
    '~/plugins/icons',
    '~/plugins/injects',
    '~/plugins/lottie',
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/svg-sprite', '@nuxtjs/sitemap'],
  axios: {
    baseURL: '/',
  },
  sitemap: {
    hostname: 'https://mst-ghi.github.io/',
    gzip: true,
    routes: ['/', '/resume'],
  },
  styleResources: {
    scss: ['~assets/scss/mixins.scss', '~assets/scss/variables.scss'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/app.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: require('./tailwind.config.js'),
  },
  build: {
    publicPath: `_mst/`,
    ignored: ['.git'],
    transpile: [/^vue-awesome/],
  },
}
