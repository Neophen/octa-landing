import { createWebHistory, createRouter } from "vue-router";
import ToolsSubpage from "./components/ToolsSubpage.vue";
import MainPage from "./components/MainPage.vue";
const history = createWebHistory();
const routes = [
  { path: "/", component: MainPage },
  { path: "/ToolsSubpage", component: ToolsSubpage },
];
const router = createRouter({ history, routes });
export default router;