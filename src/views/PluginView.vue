<template>
    <v-container>
        <v-row v-if="data.notFound">
            <v-col>
                <v-alert type="error">
                    {{ t("not-found", { pluginName }) }}
                </v-alert>
            </v-col>
        </v-row>
        <v-row v-if="!data.notFound && !data.readme">
            <v-spacer />
            <v-col cols="auto">
                <v-progress-circular indeterminate />
            </v-col>
            <v-spacer />
        </v-row>
        <v-row>
            <v-col>
                <v-card v-if="!data.notFound && data.readme">
                    <v-card-text v-html="data.readme"> </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useGithubRepo } from "../hooks/useGithubRepo.js";
import { useI18n } from "../plugins/i18n";

const { t } = useI18n();

const route = useRoute();
const pluginName = route.params.name.toString();

const { data } = useGithubRepo("MikChanNoPlugins", pluginName);
</script>

<i18n lang="yaml">
en:
    not-found: Plugin "{pluginName}" is not found!
ru:
    not-found: Плагин "{pluginName}" не найден!
uk:
    not-found: Плагін "{pluginName}" не знайдено!
</i18n>
