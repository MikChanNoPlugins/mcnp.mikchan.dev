import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import { vuetify } from "./plugins/vuetify";
import { router } from "./plugins/router";

createApp(App).use(i18n).use(vuetify).use(router).mount("#app");
