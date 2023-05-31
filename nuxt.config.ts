import { version } from './package.json'

console.log('ビルドモード(NODE_ENV): ', process.env.NODE_ENV)
const configBaseName = process ? (process.env.CONFIG_FILE || 'local') : 'local'
console.log('config file path:', `./config/env.${configBaseName}.ts`)
const envSet = require(`./config/env.${configBaseName}.ts`)

console.log(`アプリケーションをビルドします...`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  // buildDir: `.output/${chainKey}/${mediaId}`,

  typescript: {
    shim: false, // TypeScript Vue Plugin (Volar) を利用するため
    strict: false, // 型チェックが厳格
    typeCheck: false, // 開発時から型チェックを有効
  },

  runtimeConfig: {
    public: {
      CONFIG_FILE: configBaseName,
      version,
      apiBaseUrl: envSet.apiBaseUrl,
      apiImpBaseUrl: envSet.apiImpBaseUrl,
      staticBaseUrl: envSet.staticBaseUrl,
    },
  },

  app: {
    head: {
      title: 'Nuxt 3 basic',
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],

    },
    pageTransition: false,
  },

  imports: {
    dirs: ['store'],
  },

  modules: [
    // 'vite-plugin-vue-type-imports/nuxt',
    // '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      // ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  css: [
    '@/assets/scss/main.scss',
  ],

  //           additionalData: `
  // @use "sass:math";
  // @use "sass:color";
  // @use "~/assets/scss/mixins.scss" as *;
  //           `,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:string";
            @import "@/assets/scss/variable.scss";
          `,
        },
      },
    },
    // @ts-ignore ssr: { noExternal: ["moment"], },
  },
})
