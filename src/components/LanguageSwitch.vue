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

                <span>{{ t("language", 1, { locale: tooltipLocale }) }}</span>
            </v-tooltip>
        </template>

        <v-list>
            <v-list-subheader>{{ t("language") }}</v-list-subheader>

            <v-divider />

            <v-list-item
                v-for="locale in availableLocales"
                link
                :key="`locale_${locale}`"
                :active="globalLocale === locale"
                @click="setLocale(locale)"
            >
                <template #prepend>
                    <v-avatar>
                        <v-img aspect-ratio="1" cover :src="flagUrl(locale)" />
                    </v-avatar>
                </template>
                <v-list-item-title>
                    {{ t("languageName", 1, { locale }) }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ t("enLanguageName", 1, { locale }) }}
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
import { mdiTranslate } from "@mdi/js";
import { computed, ref, watchEffect } from "vue";
import { useI18n } from "../plugins/i18n";

const { locale: globalLocale, setLocale } = useI18n({ useScope: "global" });
const { t, availableLocales } = useI18n();

const flagUrl = (locale: string) => {
    return `https://countryflagsapi.com/svg/${t("flag", 1, { locale })}`;
};

const localesSize = computed(() => availableLocales.length);
const localeId = ref(0);
const tooltipLocale = computed(() => availableLocales[localeId.value]);

watchEffect(() => {
    localeId.value;
    setTimeout(() => {
        localeId.value = (localeId.value + 1) % localesSize.value;
    }, 2500);
});
</script>

<i18n lang="yaml">
en:
    language: Language
    languageName: English
    enLanguageName: English
    flag: us
ru:
    language: Язык
    languageName: Русский
    enLanguageName: Russian
    flag: ru
uk:
    language: Мова
    languageName: Українська
    enLanguageName: Ukrainian
    flag: ua
</i18n>
