import { createWebHistory, createRouter } from "vue-router";
import Tools from "./pages/Tools.vue";
import Layout from "./pages/Layout.vue";
import Programs from "./pages/Programs.vue";
const history = createWebHistory();

const mainLinks = [
  {
    url: "#the-gist",
    label: "The gist",
    component: "TheGist",
  },
  {
    url: "#subscription",
    label: "Subscription",
    component: "Subscription",
  },
  {
    url: "#look",
    label: "Your look",
    component: "YourOctafest",
  },
  {
    url: "#support",
    label: "Your success",
    component: "YourSuccess",
  },
  {
    url: "#integrations",
    label: "Integrations",
    component: "Integrations",
  },
  {
    url: "#team",
    label: "Team",
    component: "Team",
  },
];

const routes = [
  {
    path: "/",
    component: Layout,
    props: {
      logoLink: "#",
      links: mainLinks,
    },
  },
  {
    path: "/tools",
    component: Tools,
    props: {
      links: [],
    },
  },
  {
    path: "/emerging",
    component: Programs,
    props: {
      links: [],
    },
  },
];
const router = createRouter({ history, routes });
export default router;
