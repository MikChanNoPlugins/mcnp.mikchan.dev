<template>
    <v-app :theme="theme">
        <app-bar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import AppBar from "./components/AppBar.vue";

const isDarkTheme = ref(sessionStorage.getItem("is_dark_theme") !== "0");
const theme = computed(() => (isDarkTheme.value ? "dark" : "light"));
function switchTheme(val: boolean) {
    isDarkTheme.value = val;
    sessionStorage.setItem("is_dark_theme", isDarkTheme.value ? "1" : "0");
}

provide("theme", { isDarkTheme, switchTheme });
</script>
