import "vuetify/styles";
import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { i18n, useI18n } from "../i18n";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";

import { fa } from "vuetify/lib/iconsets/fa-svg";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";

// library.add(fas);
library.add({ faVk });

const vuetify = createVuetify({
    locale: createVueI18nAdapter({
        i18n,
        useI18n,
    }),
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
});

export { vuetify };
