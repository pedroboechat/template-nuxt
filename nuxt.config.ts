// https://nuxt.com/docs/4.x/api/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2026-01-20",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  eslint: {
    checker: true,
  },
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        if (config.plugins) {
          config.plugins.push(vuetify({ autoImport: true }));
        }
      });
    },
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/sitemap",
    "@nuxt/test-utils",
    "@nuxtjs/i18n",
  ],
  routeRules: {
    "/": { prerender: true },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});