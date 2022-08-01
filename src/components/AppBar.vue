<template>
    <v-app-bar>
        <v-app-bar-title>
            <router-link :to="{ name: 'home' }">
                ミックちゃんのPlugins
            </router-link>
        </v-app-bar-title>

        <v-spacer />

        <github-button />
        <theme-switch />
        <language-switch />
    </v-app-bar>
</template>

<script setup lang="ts">
import GithubButton from "./GithubButton.vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
</script>
