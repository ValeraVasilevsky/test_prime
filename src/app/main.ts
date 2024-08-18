import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import App from "./app.vue";
import { router } from "./router";
import { createPinia } from "pinia";

import "./style.css";
import "primeicons/primeicons.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    light: true,
  },
  locale: {
    today: "Сегодня",
    clear: "Очистить",
  },
});

app.use(router);
app.mount("#app");
