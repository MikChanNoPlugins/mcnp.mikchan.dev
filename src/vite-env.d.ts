/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module "vuetify/locale/adapters/vue-i18n" {
    export const createVueI18nAdapter = (
        arg: unknown
    ): LocaleAdapter & RtlOptions => {};
}
