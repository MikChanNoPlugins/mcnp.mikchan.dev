<style scoped>
.hoverable:hover {
    cursor: pointer;
}
</style>

<template>
    <v-card>
        <v-toolbar flat>
            <v-toolbar-title>
                <span class="hoverable" @click="gotoPage">
                    {{ data.name }}
                </span>
            </v-toolbar-title>

            <v-btn icon @click="gotoGithub">
                <v-icon :icon="mdiGithub" />
            </v-btn>

            <span v-if="data.stargazers_count">
                {{ data.stargazers_count }} <v-icon :icon="mdiStar" />
            </span>
        </v-toolbar>
        <v-card-text> Nothing here </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { ReposDataItem } from "../hooks/useGithubRepos.js";
import type { DeepReadonly } from "vue";
import { useRouter } from "vue-router";
import { mdiGithub, mdiStar } from "@mdi/js";

const props = defineProps({
    data: {
        type: Object as PropType<DeepReadonly<ReposDataItem>>,
        required: true,
    },
});

const router = useRouter();

const data = computed(() => props.data);

const gotoPage = () =>
    router.push({
        name: "plugin",
        params: { name: data.value.name.toLowerCase() },
    });
const gotoGithub = () =>
    window
        .open(`https://github.com/${data.value.full_name}`, "_blank")
        ?.focus();
</script>
