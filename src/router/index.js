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
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
