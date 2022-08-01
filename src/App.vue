<template>
    <v-app :theme="theme">
        <app-bar />
        <v-parallax :src="background">
            <v-main>
                <router-view />
            </v-main>
        </v-parallax>
    </v-app>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import AppBar from "./components/AppBar.vue";
import backgroundDark from "@/assets/background-dark.jpg";
import backgroundLight from "@/assets/background-light.jpg";

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
