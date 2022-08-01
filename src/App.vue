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
import background from "@/assets/background.jpg";

const isDarkTheme = ref(sessionStorage.getItem("is_dark_theme") !== "0");
const theme = computed(() => (isDarkTheme.value ? "dark" : "light"));
function switchTheme(val: boolean) {
    isDarkTheme.value = val;
    sessionStorage.setItem("is_dark_theme", isDarkTheme.value ? "1" : "0");
}

provide("theme", { isDarkTheme, switchTheme });
</script>
