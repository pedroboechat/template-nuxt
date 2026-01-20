import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

/**
 * Nuxt plugin for integrating Vuetify, a Material Design component framework.
 *
 * This plugin sets up Vuetify with Material Design Icons (MDI) and applies
 * the framework globally to all Vue components in the application.
 *
 * Vuetify provides a comprehensive set of UI components following Google's
 * Material Design specifications, including buttons, cards, dialogs, forms,
 * navigation drawers, and more.
 *
 * @see https://vuetifyjs.com/ for Vuetify documentation
 * @see https://materialdesignicons.com/ for Material Design Icons
 *
 * @example
 * ```vue
 * <template>
 *   <v-btn color="primary">Click me</v-btn>
 * </template>
 * ```
 */
export default defineNuxtPlugin((app) => {
  // Create Vuetify instance with configuration
  const vuetify = createVuetify({
    // Uncomment and customize the following options as needed:
    // Theme configuration
    // theme: {
    //   defaultTheme: 'light',
    //   themes: {
    //     light: {
    //       colors: {
    //         primary: '#1867C0',
    //         secondary: '#5CBBF6',
    //       },
    //     },
    //     dark: {
    //       colors: {
    //         primary: '#2196F3',
    //         secondary: '#424242',
    //       },
    //     },
    //   },
    // },
    // Icons configuration
    // icons: {
    //   defaultSet: 'mdi',
    // },
    // Display configuration
    // display: {
    //   mobileBreakpoint: 'sm',
    //   thresholds: {
    //     xs: 0,
    //     sm: 600,
    //     md: 960,
    //     lg: 1264,
    //     xl: 1904,
    //   },
    // },
    // Locale configuration
    // locale: {
    //   locale: 'en',
    //   fallback: 'en',
    //   messages: { en },
    // },
  });

  // Apply Vuetify to the Vue app
  app.vueApp.use(vuetify);
});
