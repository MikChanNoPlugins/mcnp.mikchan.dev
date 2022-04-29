<template>
    <v-row>
        <v-spacer />
        <v-col cols="4">
            <v-card :loading="true" contained-text prepend-icon="mdi-hard-hat">
                <template #title> {{ t("under-construction") }} </template>
                <v-card-text> {{ t("nothing-here-yet") }} </v-card-text>
            </v-card>
        </v-col>
        <v-spacer />
    </v-row>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<i18n lang="yaml" locale="en">
under-construction: Under Construction
nothing-here-yet: Nothing here yet...
</i18n>

<i18n lang="yaml" locale="ru">
under-construction: В Процессе Создания
nothing-here-yet: Тут пока ничего нет...
</i18n>

<i18n lang="yaml" locale="uk">
under-construction: Сайт ще не створений
nothing-here-yet: Тут поки що нічого немає...
</i18n>
