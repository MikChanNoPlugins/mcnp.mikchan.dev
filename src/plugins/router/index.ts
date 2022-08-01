import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("../../views/HomeView.vue"),
    },
    {
        path: "/plugins",
        name: "plugins",
        component: () => import("../../views/PluginsView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router };
