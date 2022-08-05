import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import HelloWorld from "@/pages/HelloWorld.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
