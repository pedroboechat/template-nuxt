import { vMaska } from "maska/vue";

export default defineNuxtPlugin((app) => {
  app.vueApp.directive("maska", vMaska);
});
