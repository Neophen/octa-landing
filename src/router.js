import { createRouter, createWebHistory } from "vue-router";

import Layout from "./pages/Layout.vue";
import Programs from "./pages/Programs.vue";
import Tools from "./pages/Tools.vue";
import AdvisoryBoard from "./pages/AdvisoryBoard.vue";

const history = createWebHistory();

const mainLinks = [
  {
    url: "#the-gist",
    label: "The gist",
    component: "TheGist",
  },
  {
    url: "#benefits",
    label: "Benefits",
    component: "TimeAndResources",
  },
  {
    url: "#subscription",
    label: "Subscription",
    component: "Subscription",
  },
  {
    url: "#look",
    label: "Website",
    component: "YourOctafest",
  },
  {
    url: "#support",
    label: "Support",
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
  {
    path: "/advisory-board",
    component: AdvisoryBoard,
    props: {
      links: [],
    },
  },
];
const router = createRouter({ history, routes });
export default router;
