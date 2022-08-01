import { createI18n, useI18n, UseI18nOptions } from "vue-i18n";
import * as vuetifyMessages from "vuetify/locale";

const messages = Object.entries(vuetifyMessages).reduce(
    (acc, [lang, msg]) => ({ ...acc, [lang]: { $vuetify: msg } }),
    {}
);

const sessionLocale = sessionStorage.getItem("locale");

const i18n = createI18n({
    legacy: false,
    locale: sessionLocale ?? "en",
    fallbackLocale: "en",
    messages: messages,
});

const useCustomI18n = (options?: UseI18nOptions) => {
    const i18n = useI18n(options);
    const setLocale = (locale: string) => {
        i18n.locale.value = locale;
        sessionStorage.setItem("locale", locale);
    };

    return { ...i18n, setLocale };
};

export { i18n, useCustomI18n as useI18n };
