// https://nuxt.com/docs/4.x/api/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  colorMode: {
    preference: "system",
    fallback: "light",
  },
  compatibilityDate: "2026-01-20",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  eslint: {
    checker: true,
  },
  i18n: {
    baseUrl: process.env.NUXT_BASE_URL || "http://localhost:3000",
    defaultLocale: "en",
    langDir: "locales",
    locales: [{ code: "en", language: "en", name: "English", file: "en.json" }],
    restructureDir: "i18n",
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
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
  routeRules: {
    "/": { prerender: true },
  },
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
