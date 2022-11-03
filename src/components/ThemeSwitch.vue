<template>
    <v-menu anchor="start">
        <template #activator="{ props: menuProps }">
            <v-tooltip anchor="bottom">
                <template #activator="{ props: tooltipProps }">
                    <v-btn
                        v-bind="{ ...menuProps, ...tooltipProps }"
                        :icon="mdiThemeLightDark"
                    />
                </template>

                <span>{{ t("theme") }}</span>
            </v-tooltip>
        </template>

        <v-list>
            <v-list-subheader>{{ t("theme") }}</v-list-subheader>

            <v-divider />

            <v-list-item
                link
                @click="switchTheme(false)"
                :prepend-icon="mdiWhiteBalanceSunny"
                :active="!isDarkTheme"
            >
                <v-list-item-title>{{ t("light") }}</v-list-item-title>
            </v-list-item>

            <v-list-item
                link
                @click="switchTheme(true)"
                :prepend-icon="mdiWeatherNight"
                :active="isDarkTheme"
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
import { DeepReadonly, inject, readonly, ref, Ref } from "vue";
import { useI18n } from "../plugins/i18n";

const { t } = useI18n();

const { isDarkTheme, switchTheme } = inject<{
    isDarkTheme: DeepReadonly<Ref<boolean>>;
    switchTheme: (val: boolean) => void;
}>("theme", {
    isDarkTheme: readonly(ref(false)),
    switchTheme: () => {
        return;
    },
});
</script>

<i18n lang="yaml">
en:
    theme: Theme
    light: Light
    dark: Dark
ru:
    theme: Тема
    light: Светлая
    dark: Темная
uk:
    theme: Тема
    light: Світла
    dark: Темна
</i18n>
