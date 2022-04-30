<template>
    <v-app-bar>
        <v-app-bar-title>
            <router-link :to="{ name: 'home' }">
                ミックちゃんのPlugins
            </router-link>
        </v-app-bar-title>

        <v-spacer />

        <!-- <v-btn icon="fa:fab fa-vk" /> -->

        <github-button />
        <light-switch />
        <language-switch />
    </v-app-bar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LightSwitch = defineAsyncComponent(
    () => import("@/components/LightSwitch.vue")
);
const LanguageSwitch = defineAsyncComponent(
    () => import("@/components/LanguageSwitch.vue")
);
const GithubButton = defineAsyncComponent(
    () => import("@/components/GithubButton.vue")
);
</script>
