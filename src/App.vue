<template>
    <v-app :theme="theme">
        <app-bar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { computed, provide, ref, readonly, defineAsyncComponent } from "vue";

const AppBar = defineAsyncComponent(() => import("@/components/AppBar.vue"));

const is_dark_theme = ref(sessionStorage.getItem("is_dark_theme") !== "0");
const theme = computed(() => (is_dark_theme.value ? "dark" : "light"));

function switch_theme(val: boolean) {
    is_dark_theme.value = val;
    sessionStorage.setItem("is_dark_theme", is_dark_theme.value ? "1" : "0");
}

provide("theme", { is_dark_theme: readonly(is_dark_theme), switch_theme });
</script>
