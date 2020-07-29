import { createWebHistory, createRouter } from "vue-router";
import Tools from "./pages/Tools.vue";
import Layout from "./pages/Layout.vue";
const history = createWebHistory();

const mainLinks = [
  {
    url: "#the-gist",
    label: "The gist",
    component: 'TheGist',
  },
  {
    url: "#subscription",
    label: "Subscription",
    component: 'Subscription',
  },
  {
    url: "#team",
    label: "Team",
    component: 'Team',
  },
  {
    url: "#look",
    label: "Look",
    component: 'YourOctafest',
  },
  {
    url: "#support",
    label: "Support",
    component: 'Support',
  },
  {
    url: "#integrations",
    label: "Integrations",
    component: 'Integrations',
  },
];

const routes = [
  {
    path: "/",
    component: Layout,
    props: {
      logoLink: '#',
      links: mainLinks
    }
  },
  {
    path: "/tools",
    component: Tools,
    props: {
      links: mainLinks
    }
  },
];
const router = createRouter({ history, routes });
export default router;