<template>
    <v-tooltip anchor="bottom">
        <template #activator="{ props }">
            <v-btn icon="fa:fab fa-vk" @click="goToVk" v-bind="props" />
        </template>

        <span>VK</span>
    </v-tooltip>
</template>

<script setup lang="ts">
const goToVk = () => window.open("https://vk.com/guiltyera", "_blank")?.focus();
</script>
