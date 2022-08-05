import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import HelloWorld from "@/pages/HelloWorld.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/svc-hackathon/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/svc-hackathon/",
    component: Home,
  },
  {
    path: "/svc-hackathon/home",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
