import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";
import Free from "../views/Free.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/app",
    name: "Top",
    component: Top,
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
  {
    path: "/app/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
