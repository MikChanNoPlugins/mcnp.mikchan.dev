<template>
    <v-menu anchor="start">
        <template #activator="{ props: menuProps }">
            <v-tooltip anchor="bottom">
                <template #activator="{ props: tooltipProps }">
                    <v-btn
                        :icon="mdiTranslate"
                        v-bind="{ ...menuProps, ...tooltipProps }"
                    />
                </template>

                <span>{{ t("language") }}</span>
            </v-tooltip>
        </template>

        <v-list>
            <v-list-subheader>{{ t("language") }}</v-list-subheader>

            <v-divider />

            <v-list-item
                v-for="locale in availableLocales"
                :key="`locale_${locale}`"
                :active="globalLocale === locale"
                @click="setLocale(locale)"
                :prepend-avatar="flagUrl(locale)"
            >
                <v-list-item-title>
                    {{ t("languageName", 1, { locale }) }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
import { mdiTranslate } from "@mdi/js";
import { useI18n } from "../plugins/i18n";

const { locale: globalLocale, setLocale } = useI18n({ useScope: "global" });
const { t, availableLocales } = useI18n();

const flagUrl = (locale: string) => {
    return `https://countryflagsapi.com/svg/${t("flag", 1, { locale })}`;
};
</script>

<i18n lang="yaml">
en:
    language: Language
    languageName: English
    flag: us
ru:
    language: Язык
    languageName: Русский
    flag: ru
uk:
    language: Мова
    languageName: Українська
    flag: ua
</i18n>
