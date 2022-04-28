<template>
    <v-container>
        <v-row>
            <v-spacer />
            <v-col cols="4">
                <v-card
                    :loading="true"
                    contained-text
                    prepend-icon="mdi-hard-hat"
                >
                    <template #title> Under Construction </template>
                    <v-card-text> Nothing here yet... </v-card-text>
                </v-card>
            </v-col>
            <v-spacer />
        </v-row>
    </v-container>
</template>
