export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' },
    layoutTransition: { name: 'slide-right', mode: 'out-in' },
    head: {
      title: "NUXT-DASHBOARD",
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
          content: "Nuxt Dashboard",
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

  routeRules: {
    '/': { prerender: true },
    '/auth/**': { prerender: true },
    '/dashboard/**': { ssr: false },
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
      collections: ['bx', 'heroicons', 'material-symbols', 'mdi', 'ph', 'octicon', 'logos', 'tabler', 'line-md']
    }
  },

  css: [
    '@/assets/css/index.css'
  ],
  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
  ],

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