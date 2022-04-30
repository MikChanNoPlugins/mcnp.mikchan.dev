<template>
    <v-btn :icon="mdiGithub" @click="goToGithub" />
</template>

<script setup lang="ts">
import { mdiGithub } from "@mdi/js";

const goToGithub = () =>
    window.open("https://github.com/MikChanNoPlugins", "_blank")?.focus();
</script>
