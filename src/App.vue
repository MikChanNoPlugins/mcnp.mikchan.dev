<template>
    <div>
        <div>{{ t("test") }}</div>
        <div>
            <button
                v-for="(locale, idx) in availableLocales"
                :key="idx"
                @click="onClick(locale)"
            >
                {{ locale }}
            </button>
        </div>
    </div>
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

<i18n lang="yml" locale="en">
test: Test
</i18n>

<i18n lang="yml" locale="ru">
test: Тест
</i18n>

<i18n lang="yml" locale="jp">
test: 試し
</i18n>
