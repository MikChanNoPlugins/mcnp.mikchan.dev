import { createI18n } from "vue-i18n";
import {
    en as vuetify_en,
    ru as vuetify_ru,
    uk as vuetify_uk,
} from "vuetify/locale";

const messages = {
    en: { $vuetify: vuetify_en },
    ru: { $vuetify: vuetify_ru },
    uk: { $vuetify: vuetify_uk },
};

const locales: ("en" | "ru" | "uk")[] = ["en", "ru", "uk"];
const sessionLocale = sessionStorage.getItem("locale");
const locale = locales.find((locale) => locale == sessionLocale) ?? "en";

const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: "en",
    messages,
});

export default i18n;
