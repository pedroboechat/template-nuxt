// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-09-17",
  eslint: {
    checker: true,
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error: Undefined type error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/eslint",
    "@nuxtjs/sitemap",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
