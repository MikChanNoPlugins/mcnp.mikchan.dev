<template>
    <v-container class="container">
        <row-title>
            {{ t("plugins") }}
        </row-title>

        <row-loading v-if="status === 'loading'" />

        <row-error v-if="status === 'notFound'">
            {{ t("not-found") }}
        </row-error>

        <v-row v-if="status === 'found'">
            <v-col
                v-for="data in cleanData"
                :key="data.id"
                cols="12"
                sm="6"
                md="4"
            >
                <plugin-list-card :data="data" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { useI18n } from "../plugins/i18n";
import RowTitle from "../components/RowTitle.vue";
import RowError from "../components/RowError.vue";
import RowLoading from "../components/RowLoading.vue";
import PluginListCard from "../components/PluginListCard.vue";

const { t } = useI18n();

const { reposData } = useGithubRepos("MikChanNoPlugins");
const githubData = computed(() => reposData.value.reposData ?? []);
const status = computed(() => reposData.value.status);

const cleanData = computed(() =>
    githubData.value
        .filter((d) => d.topics?.includes("spigot-plugin"))
        .sort((b, a) => a.stargazers_count - b.stargazers_count)
);
</script>

<i18n lang="yaml">
en:
    plugins: Plugins
    not-found: Nothing was found.
ru:
    plugins: Плагины
    not-found: Ничего не найдено.
uk:
    plugins: Плагіни
    not-found: Нічого не знайдено.
</i18n>
