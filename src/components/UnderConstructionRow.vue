<template>
    <v-row>
        <v-spacer />
        <v-col cols="auto">
            <v-card :loading="true" contained-text :prepend-icon="mdiHardHat">
                <template #title> {{ t("under-construction") }} </template>
                <v-card-text> {{ t("nothing-here-yet") }} </v-card-text>
            </v-card>
        </v-col>
        <v-spacer />
    </v-row>
</template>

<script setup lang="ts">
import { mdiHardHat } from "@mdi/js";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<i18n lang="yaml" locale="en">
under-construction: Under Construction
nothing-here-yet: Nothing here yet...
</i18n>

<i18n lang="yaml" locale="ru">
under-construction: В Разработке
nothing-here-yet: Тут пока ничего нет...
</i18n>

<i18n lang="yaml" locale="uk">
under-construction: Здійснюється Розробка
nothing-here-yet: Тут поки що нічого немає...
</i18n>
