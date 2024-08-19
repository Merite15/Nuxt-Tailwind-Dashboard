const siteUrl = "http://localhost:3000";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "WEBSITE",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "WEBSITE",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  compatibilityDate: '2024-08-13',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  icon: {
    serverBundle: {
      collections: ['bx', 'heroicons', 'material-symbols', 'mdi', 'ph', 'octicon', 'tabler', 'line-md']
    }
  },

  css: [
    '@/assets/css/index.css'
  ],
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/seo',
    'nuxt-swiper',
    '@nuxt/ui',
    "@nuxt/image",
    '@hypernym/nuxt-anime',
    '@hypernym/nuxt-gsap'
  ],

  build: {
    transpile: ['gsap'],
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  imports: {
    dirs: ['utils/**'],
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    quiet: true,
    viewer: true,
  },

  site: {
    url: siteUrl,
    name: "website",
    description: "Website",
    favicon: "/logo.ico",
  },

  image: {
    dir: 'assets/img',
    format: ["webp"],
    provider: 'ipx',
    quality: 80,
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    storageKey: 'theme-color'
  },
})