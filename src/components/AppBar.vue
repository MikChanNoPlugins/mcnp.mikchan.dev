<template>
    <v-app-bar>
        <v-app-bar-title>
            <router-link :to="{ name: 'home' }">
                ミクちゃんのPlugins
            </router-link>
        </v-app-bar-title>

        <v-spacer />

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
</script>
