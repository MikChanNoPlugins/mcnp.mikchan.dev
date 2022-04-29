<template>
    <v-container>
        <under-construction-row />
    </v-container>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const UnderConstructionRow = defineAsyncComponent(
    () => import("@/components/UnderConstructionRow.vue")
);
</script>
