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
        <v-row>
            <v-spacer />
            <v-col cols="4">
                <v-card
                    :loading="true"
                    contained-text
                    prepend-icon="mdi-hard-hat"
                >
                    <template #title> Under Construction </template>
                    <v-card-text> Nothing here yet... </v-card-text>
                </v-card>
            </v-col>
            <v-spacer />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { DeepReadonly, Ref, inject, readonly, ref } from "vue";

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
