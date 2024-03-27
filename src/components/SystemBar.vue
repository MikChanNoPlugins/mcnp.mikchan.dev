<style scoped>
.quote {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.time {
    flex-grow: 1;
    flex-shrink: 0;
}
</style>

<template>
    <v-system-bar>
        <span class="quote"> </span>
        <v-spacer />
        <span class="time"> {{ time }} </span>
    </v-system-bar>
</template>

<script setup lang="ts">
import { useTime } from "../hooks/useTime";

const { time } = useTime();
</script>
