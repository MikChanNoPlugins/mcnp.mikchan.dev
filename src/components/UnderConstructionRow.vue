<template>
    <v-row>
        <v-spacer />
        <v-col cols="auto">
            <v-card :loading="true" contained-text :prepend-icon="mdiHardHat">
                <template #title> {{ t("under-construction") }} </template>
                <v-card-text> {{ t("nothing-here-yet") }} </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="onGotoPlugins">
                        {{ t("goto-plugins") }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-spacer />
    </v-row>
</template>

<script setup lang="ts">
import { mdiHardHat } from "@mdi/js";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const onGotoPlugins = () =>
    router.push({
        name: "plugins",
    });
</script>

<i18n lang="yaml">
en:
    under-construction: Under Construction
    nothing-here-yet: Nothing here yet...
    goto-plugins: Go to plugins...
ru:
    under-construction: В Разработке
    nothing-here-yet: Тут пока ничего нет...
    goto-plugins: Перейти к плагинам...
uk:
    under-construction: Здійснюється Розробка
    nothing-here-yet: Тут поки що нічого немає...
    goto-plugins: Перейти до плагінів...
</i18n>
