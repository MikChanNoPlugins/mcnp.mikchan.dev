<style scoped>
.clickable:hover {
    cursor: pointer;
}
</style>

<template>
    <v-footer inset>
        <v-container>
            <v-row>
                <v-col cols="auto">
                    <v-img
                        class="clickable"
                        @click="onBannerClick"
                        width="300px"
                        height="100px"
                        src="https://api.mcbanners.com/banner/saved/RVNJcDSJaLUenQ.png"
                    />
                </v-col>
                <v-col cols="auto">
                    <v-img
                        class="clickable"
                        @click="onBannerClick"
                        width="300px"
                        height="100px"
                        src="https://api.mcbanners.com/banner/saved/WbVGDQsrgTulAV.png"
                    />
                </v-col>
                <v-col cols="auto">
                    <v-img
                        class="clickable"
                        @click="onBannerClick"
                        width="300px"
                        height="100px"
                        src="https://api.mcbanners.com/banner/saved/ipbDHEUHBVzvAb.png"
                    />
                </v-col>
            </v-row>

            <v-divider class="my-4" />

            <v-row>
                <v-spacer />
                <v-col cols="auto">
                    {{ new Date().getFullYear() }}
                </v-col>
                <v-spacer />
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
import { toUrl } from "../utils/toUrl";

const onBannerClick = toUrl("https://vk.com/mikchanno");
</script>
