<template>
    <v-app :theme="theme">
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { computed, provide, ref, readonly } from "vue";

const is_dark_theme = ref(true);
const theme = computed(() => (is_dark_theme.value ? "dark" : "light"));

function switch_theme(val: boolean) {
    is_dark_theme.value = val;
}

provide("theme", { is_dark_theme: readonly(is_dark_theme), switch_theme });
</script>
