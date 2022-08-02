import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { vueI18n } from "@intlify/vite-plugin-vue-i18n";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, "./path/to/src/locales/**"),
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
