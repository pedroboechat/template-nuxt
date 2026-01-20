import { vMaska } from "maska/vue";

/**
 * Nuxt plugin for integrating the Maska input mask library.
 *
 * This plugin globally registers the `v-maska` directive, allowing you to
 * apply input masks to form fields throughout your application.
 *
 * Maska provides real-time input masking for various formats such as
 * phone numbers, dates, credit cards, and custom patterns.
 *
 * @see https://github.com/beholdr/maska for Maska documentation
 *
 * @example
 * ```vue
 * <template>
 *   <input v-maska="'(##) ####-####'" placeholder="Phone number" />
 * </template>
 * ```
 *
 * @example
 * ```vue
 * <template>
 *   <input v-maska="'##/##/####'" placeholder="Date (DD/MM/YYYY)" />
 * </template>
 * ```
 */
export default defineNuxtPlugin((app) => {
  // Register the maska directive globally
  app.vueApp.directive("maska", vMaska);
});
