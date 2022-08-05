<template>
    <v-tooltip anchor="bottom">
        <template #activator="{ props }">
            <v-btn icon @click="goToBuyMeACoffee" v-bind="props">
                <v-icon :icon="SupportButtonIcon" />
            </v-btn>
        </template>

        <span>{{ t("support") }}</span>
    </v-tooltip>
</template>

<script setup lang="ts">
import { useI18n } from "../plugins/i18n";
import { toUrl } from "../utils/toUrl";
import SupportButtonIcon from "./SupportButtonIcon.vue";

const { t } = useI18n();

const goToBuyMeACoffee = toUrl("https://www.buymeacoffee.com/mcnp");
</script>

<i18n lang="yaml">
en:
    support: Support the creator
ru:
    support: Поддержать автора
uk:
    support: Підтримати автора
</i18n>
