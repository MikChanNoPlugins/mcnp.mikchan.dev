<template>
    <v-tooltip anchor="bottom">
        <template #activator="{ props }">
            <v-btn icon="fa:fab fa-vk" @click="goToVk" v-bind="props" />
        </template>

        <span>VK</span>
    </v-tooltip>
</template>

<script setup lang="ts">
import { toUrl } from "../utils/toUrl";

const goToVk = toUrl("https://vk.com/guiltyera");
</script>
