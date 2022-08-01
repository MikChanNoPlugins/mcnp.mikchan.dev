<template>
    <v-app-bar>
        <v-app-bar-title>
            <router-link :to="{ name: 'home' }">
                ミックちゃんのPlugins
            </router-link>
        </v-app-bar-title>

        <v-spacer />

        <github-button />
    </v-app-bar>
</template>

<script setup lang="ts">
import GithubButton from "./GithubButton.vue";
</script>
