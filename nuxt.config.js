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
        hid: 'description',
        name: 'description',
        content: `Mostafa Gholami's website. ${AppData.headline}`,
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-png', href: '/logo.png' }],
    script: [{ src: '/js/welcome.js' }],
  },
  css: ['~/assets/css/app.css'],
  plugins: ['~/plugins/packages', '~/plugins/icons', '~/plugins/injects'],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/svg-sprite'],
  axios: {
    baseURL: '/',
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
    watch: ['decorators/*.ts', 'plugins/*.ts', 'libs/*.ts'],
    ignored: ['.git'],
    transpile: [/^vue-awesome/],
  },
}
