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

const UnderConstructionRow = defineAsyncComponent(
    () => import("@/components/UnderConstructionRow.vue")
);

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
