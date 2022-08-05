<template>
    <v-tooltip anchor="bottom">
        <template #activator="{ props }">
            <v-btn :icon="mdiGithub" @click="goToGithub" v-bind="props" />
        </template>

        <span>GitHub</span>
    </v-tooltip>
</template>

<script setup lang="ts">
import { mdiGithub } from "@mdi/js";
import { toUrl } from "../utils/toUrl";

const goToGithub = toUrl("https://github.com/MikChanNoPlugins");
</script>
