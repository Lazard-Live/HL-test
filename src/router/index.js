import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/pages/AuthPage";
import AnalyticsPage from "@/pages/AnalyticsPage";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: AuthPage,
  },
  {
    path: "/Analytics",
    name: "Analytics",
    component: AnalyticsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
