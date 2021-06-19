export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BENJAMIN LOOI | WEB DEVELOPER',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Web Developer based in Kuala Lumpur. This is my fabulous portfolio.',
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Benjaminlooi_' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://benjaminlooi.dev',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'BENJAMIN LOOI | WEB DEVELOPER',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Web Developer based in Kuala Lumpur. This is my fabulous portfolio.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://benjaminlooi.dev/BenjaminLooiPortfolio.png',
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'BENJAMIN LOOI | WEB DEVELOPER',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://benjaminlooi.dev',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'BENJAMIN LOOI | WEB DEVELOPER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Web Developer based in Kuala Lumpur. This is my fabulous portfolio.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://benjaminlooi.dev/BenjaminLooiPortfolio.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://benjaminlooi.dev/BenjaminLooiPortfolio.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Benjamin Looi Portfolio',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // https://eduardoboucas.github.io/include-media/
    // 'include-media/dist/_include-media.scss',
    // Global custom scss
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll
    '~/plugins/locomotiveScroll.client.js',
    '~/plugins/locomotiveScrollBoth.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/nuxt-gsap-module
    'nuxt-gsap-module',
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
    // https://www.npmjs.com/package/@nuxtjs/google-fonts
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://www.npmjs.com/package/nuxt-gsap-module
  gsap: {
    /* module options */
  },

  fontawesome: {
    icons: {
      solid: ['faExternalLinkAlt', 'faHeart', 'faCode'],
      brands: [
        'faFacebookSquare',
        'faGithub',
        'faInstagram',
        'faTwitter',
        'faLinkedinIn',
      ],
    },
  },

  googleFonts: {
    families: {
      'Playfair+Display': [400, 700],
      Archivo: [400, 800],
    },
  },
}
