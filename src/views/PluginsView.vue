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
    </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "../plugins/i18n";

const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
    plugins: Plugins
ru:
    plugins: Плагины
uk:
    plugins: Плагіни
</i18n>
