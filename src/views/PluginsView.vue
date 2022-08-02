<template>
    <v-container class="container">
        <v-row>
            <v-col cols="auto">
                <v-card>
                    <v-card-text>
                        <h1>
                            {{ t("plugins") }}
                        </h1>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="data in cleanData" :key="data.id" sm="6" md="4">
                <v-card>
                    <v-card-title>{{ data.name }}</v-card-title>
                    <v-card-text>
                        {{ data }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { useI18n } from "../plugins/i18n";

const { t } = useI18n();

const { data: githubData } = useGithubRepos("MikChanNoPlugins");
const cleanData = computed(() =>
    githubData.value
        .filter((d) => d.topics?.includes("spigot-plugin"))
        .sort((b, a) => (a.stargazers_count ?? 0) - (b.stargazers_count ?? 0))
);
</script>

<i18n lang="yaml">
en:
    plugins: Plugins
ru:
    plugins: Плагины
uk:
    plugins: Плагіни
</i18n>
