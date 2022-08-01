import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import "vuetify/styles";
import { i18n, useI18n } from "../i18n";

const vuetify = createVuetify({
    locale: createVueI18nAdapter({
        i18n,
        useI18n,
    }),

    components,
    directives,
});

export { vuetify };
