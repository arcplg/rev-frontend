// https://nuxt.com/docs/api/configuration/nuxt-config
import stylelintPlugin from 'vite-plugin-stylelint';


export default defineNuxtConfig({
  devtools: true,

  vite: {
    plugins: [
      stylelintPlugin()
    ]
  },
})
