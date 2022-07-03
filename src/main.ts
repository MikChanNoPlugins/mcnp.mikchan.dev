import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import { loadFonts } from "./plugins/webfontloader";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

loadFonts();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(i18n)
    .use(router)
    .use(vuetify)
    .mount("#app");