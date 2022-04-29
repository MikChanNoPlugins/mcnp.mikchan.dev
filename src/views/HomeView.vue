<template>
    <v-container>
        <v-row>
            <v-col cols="auto">
                <v-switch v-model="theme">
                    <template #label>
                        <v-icon
                            :icon="
                                is_dark_theme
                                    ? 'mdi-moon-waning-crescent'
                                    : 'mdi-white-balance-sunny'
                            "
                        />
                    </template>
                </v-switch>
            </v-col>

            <v-spacer />

            <v-col cols="auto">
                <v-select
                    v-model="locale"
                    :items="locale_items"
                    :label="t('language')"
                    dense
                />
            </v-col>
        </v-row>
        <under-construction-row />
    </v-container>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import {
    DeepReadonly,
    Ref,
    inject,
    readonly,
    ref,
    defineAsyncComponent,
} from "vue";
import { useI18n } from "vue-i18n";

const UnderConstructionRow = defineAsyncComponent(
    () => import("@/components/UnderConstructionRow.vue")
);

const { locale } = useI18n({ useScope: "global" });
const { t } = useI18n({ useScope: "local" });

const locale_items = ["en", "ru", "uk"];

const { is_dark_theme, switch_theme } = inject<{
    is_dark_theme: DeepReadonly<Ref<boolean>>;
    switch_theme: (val: boolean) => void;
}>("theme", {
    is_dark_theme: readonly(ref(false)),
    switch_theme: () => {
        return;
    },
});

const theme = computed({
    get() {
        return !is_dark_theme.value;
    },
    set(val: boolean) {
        switch_theme(!val);
    },
});
</script>

<i18n lang="yaml" locale="en">
language: Language
</i18n>
<i18n lang="yaml" locale="ru">
language: Язык
</i18n>
<i18n lang="yaml" locale="uk">
language: Мова
</i18n>
