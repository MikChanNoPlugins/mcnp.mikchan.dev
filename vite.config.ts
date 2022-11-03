import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { fileURLToPath, URL } from "url";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
        }),
        vueI18n({
            include: path.resolve(__dirname, "./src/locales/**"),
        }),
        VitePWA({ registerType: "autoUpdate" }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "node-fetch": "isomorphic-fetch",
        },
    },
});
