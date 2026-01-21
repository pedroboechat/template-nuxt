<template>
  <v-app>
    <v-app-bar :elevation="1">
      <v-spacer />
      <span>
        <v-icon icon="mdi:mdi-vuetify" />
        <b> Nuxt.js Template</b>
      </span>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer app border>
      This is a footer! @ {{ new Date().getFullYear() }}
    </v-footer>
  </v-app>
</template>

<script setup>
// Import libraries
import { defu } from "defu";

// Set global head
const globalHead = defu(
  {
    title: $t("!head-title"),
  },
  useLocaleHead().value,
);
useHead(globalHead);
</script>
