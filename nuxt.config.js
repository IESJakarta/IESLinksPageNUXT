export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IES Jakarta Quick Links',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'description', content: 'We are a church committed to serve the English-speaking community in Jakarta.' },
      { property: 'og:title', content: 'IES Jakarta' },
      { property: 'og:description',
              content: 'We are a church committed to serve the English-speaking community in Jakarta.' },
      { property: 'og:url', content: 'https://iesjak.art' },
      { property: 'og:image', content: 'https://iesjak.art/graphics/IES-logoWhiteBack.png' },
      { property: 'og:image:secure_url', content: 'https://iesjak.art/graphics/IES-logoWhiteBack.png' },
      { property: 'og:updated_time', content: '1633093082000' },
      { property: 'profile:username', content: 'IESJakarta' },
      { name: 'twitter:title', content: 'IES Jakarta' },
      { name: 'twitter:description',
              content: 'We are a church committed to serve the English-speaking community in Jakarta.' },
      { name: 'twitter:image', content: 'https://iesjak.art/graphics/IES-logoWhiteBack.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon_package_v0.16/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon_package_v0.16/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon_package_v0.16/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon_package_v0.16/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon_package_v0.16/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      {
        rel:'preconnect' href='https://fonts.googleapis.com',
        rel: 'preconnect' href='https://fonts.gstatic.com' crossorigin,
        href:'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap', 
        rel:'stylesheet
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
