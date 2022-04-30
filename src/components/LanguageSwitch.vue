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

            <v-list-item @click="set_locale('en')" :active="locale === 'en'">
                <v-list-item-avatar start>
                    <v-img src="@/assets/flags/en.svg" aspect-ratio="1" cover />
                </v-list-item-avatar>

                <v-list-item-title>English</v-list-item-title>
            </v-list-item>

            <v-list-item @click="set_locale('uk')" :active="locale === 'uk'">
                <v-list-item-avatar start>
                    <v-img src="@/assets/flags/uk.svg" aspect-ratio="1" cover />
                </v-list-item-avatar>

                <v-list-item-title>Українська</v-list-item-title>
            </v-list-item>

            <v-list-item @click="set_locale('ru')" :active="locale === 'ru'">
                <v-list-item-avatar start>
                    <v-img src="@/assets/flags/ru.svg" aspect-ratio="1" cover />
                </v-list-item-avatar>

                <v-list-item-title>Русский</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
import { mdiTranslate } from "@mdi/js";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });
const { t } = useI18n({ useScope: "local" });

const set_locale = (alocale: "en" | "ru" | "uk") => {
    locale.value = alocale;
    sessionStorage.setItem("locale", locale.value);
};
</script>

<i18n lang="yaml" locale="en">
language: Language
</i18n>

<i18n lang="yaml" locale="uk">
language: Мова
</i18n>

<i18n lang="yaml" locale="ru">
language: Язык
</i18n>
