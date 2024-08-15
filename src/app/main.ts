import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import App from "./app.vue";
import { router } from "./router";

import "./style.css";

const app = createApp(App);

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
