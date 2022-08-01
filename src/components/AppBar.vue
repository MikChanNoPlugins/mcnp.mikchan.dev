<style scoped>
.router-link,
.router-link:visited,
.router-link:hover,
.router-link:active {
    text-decoration: none;
    color: inherit;

    font-size: 1.5rem;
}
</style>

<template>
    <v-app-bar app fixed>
        <v-app-bar-title>
            <router-link class="router-link" :to="{ name: 'home' }">
                <v-avatar>
                    <v-img
                        src="https://avatars.githubusercontent.com/u/95277452?s=400&u=c7df72b1e36ed44ae2abbfcb2c33d1bcee92c7e8&v=4"
                    />
                </v-avatar>

                MikChanのPlugins
            </router-link>
        </v-app-bar-title>

        <v-spacer />

        <github-button />
        <vk-button />
        <support-button />

        <v-divider vertical class="mx-1" />

        <theme-switch />
        <language-switch />
    </v-app-bar>
</template>

<script setup lang="ts">
import GithubButton from "./GithubButton.vue";
import VkButton from "./VkButton.vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import SupportButton from "./SupportButton.vue";
</script>
