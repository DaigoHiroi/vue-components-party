import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Free from "../views/Free.vue";
import About from "../views/About.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/app",
    name: "Home",
    component: Home,
  },
  {
    path: "/app/about",
    name: "About",
    component: About,
  },
  {
    path: "/app/free",
    name: "Free",
    component: Free,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
