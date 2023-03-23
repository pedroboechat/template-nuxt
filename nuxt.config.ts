// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  experimental: {
    // Workaround for Vuetify build error on Nuxt 3.3.1
    inlineSSRStyles: false,
  },
  modules: ["@nuxtjs/eslint-module"],
});
