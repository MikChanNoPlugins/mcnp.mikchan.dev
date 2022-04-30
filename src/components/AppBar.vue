<template>
    <v-app-bar>
        <v-app-bar-title>
            <router-link :to="{ name: 'home' }">
                ミックちゃんのPlugins
            </router-link>
        </v-app-bar-title>

        <v-spacer />

        <github-button />
        <light-switch />
        <language-switch />
    </v-app-bar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { mdiGithub } from "@mdi/js";

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
