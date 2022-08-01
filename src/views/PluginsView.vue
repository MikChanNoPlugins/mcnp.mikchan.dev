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
            <v-col
                v-for="(item, idx) in longArray"
                cols="4"
                :key="`card_${idx}`"
            >
                <v-card>
                    <v-card-title> Test Title {{ item }} </v-card-title>
                    <v-card-text> Test Body {{ item }} </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useI18n } from "../plugins/i18n";

const longArray = reactive([...new Array(50)].map((_, idx) => idx + 1));

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
