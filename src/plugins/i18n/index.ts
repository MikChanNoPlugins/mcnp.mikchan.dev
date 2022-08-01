import { createI18n, useI18n, UseI18nOptions } from "vue-i18n";

const sessionLocale = sessionStorage.getItem("locale");

const i18n = createI18n({
    legacy: false,
    locale: sessionLocale ?? "en",
    fallbackLocale: "en",
    messages: {},
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
