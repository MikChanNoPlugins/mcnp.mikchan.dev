<template>
    <v-container>
        <v-row>
            <v-spacer />
            <v-col cols="auto">{{ t("test") }} </v-col>
            <v-spacer />
        </v-row>
        <v-row>
            <v-spacer />
            <v-col cols="auto" v-for="locale in availableLocales" :key="locale">
                <v-btn @click="onClick(locale)">{{ locale }}</v-btn>
            </v-col>
            <v-spacer />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "./plugins/i18n";

const { setLocale, availableLocales, t } = useI18n({
    useScope: "local",
});

const onClick = (locale: string) => {
    setLocale(locale);
};
</script>

<i18n lang="yml">
en:
    test: Test
ru:
    test: Тест
jp:
    test: 試し
</i18n>
