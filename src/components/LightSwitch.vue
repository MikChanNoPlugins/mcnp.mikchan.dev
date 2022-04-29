<template>
    <v-menu anchor="start">
        <template #activator="{ props }">
            <v-btn v-bind="props" :icon="mdiThemeLightDark" />
        </template>

        <v-list>
            <v-list-subheader>{{ t("theme") }}</v-list-subheader>

            <v-divider />

            <v-list-item
                @click="switch_theme(false)"
                :prepend-icon="mdiWhiteBalanceSunny"
                :active="!is_dark_theme"
            >
                <v-list-item-title>{{ t("light") }}</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="switch_theme(true)"
                :prepend-icon="mdiWeatherNight"
                :active="is_dark_theme"
            >
                <v-list-item-title>{{ t("dark") }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
import {
    mdiWeatherNight,
    mdiWhiteBalanceSunny,
    mdiThemeLightDark,
} from "@mdi/js";
import { DeepReadonly, Ref, inject, readonly, ref } from "vue";
import { useI18n } from "vue-i18n";

const { is_dark_theme, switch_theme } = inject<{
    is_dark_theme: DeepReadonly<Ref<boolean>>;
    switch_theme: (val: boolean) => void;
}>("theme", {
    is_dark_theme: readonly(ref(false)),
    switch_theme: () => {
        return;
    },
});

const { t } = useI18n();
</script>

<i18n lang="yaml" locale="en">
theme: Theme
light: Light
dark: Dark
</i18n>

<i18n lang="yaml" locale="uk">
theme: Тема
light: Світла
dark: Темна
</i18n>

<i18n lang="yaml" locale="ru">
theme: Тема
light: Светлая
dark: Тёмная
</i18n>
