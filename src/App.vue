<style scoped>
.main {
    min-height: 100vh;
}
</style>

<template>
    <v-app
        :theme="theme"
        :style="{
            background: `url(${background})`,
        }"
    >
        <system-bar />
        <app-bar />
        <v-main class="main">
            <router-view />
        </v-main>

        <b-footer />
    </v-app>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import AppBar from "./components/AppBar.vue";
import backgroundDark from "@/assets/background-dark.jpg";
import backgroundLight from "@/assets/background-light.jpg";
import SystemBar from "./components/SystemBar.vue";
import BFooter from "./components/Footer.vue";

const isDarkTheme = ref(sessionStorage.getItem("is_dark_theme") !== "0");
const theme = computed(() => (isDarkTheme.value ? "dark" : "light"));
const background = computed(() =>
    isDarkTheme.value ? backgroundDark : backgroundLight
);
function switchTheme(val: boolean) {
    isDarkTheme.value = val;
    sessionStorage.setItem("is_dark_theme", isDarkTheme.value ? "1" : "0");
}

provide("theme", { isDarkTheme, switchTheme });
</script>
