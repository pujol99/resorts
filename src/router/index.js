import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/:mountainName",
        name: "mountain",
        component: () => import("../components/Mountain.vue"),
    },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
