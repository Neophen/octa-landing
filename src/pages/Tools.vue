<template>
  <div class="w-screen overflow-x-hidden">
    <OctaHeader :links="links" :logo-link="logoLink" />
    <MobileHeader />
    <div class="px-4">
      <div class="container mb-4">
        <AdvancedToolkit
          class="mt-44"
          :links="components"
          style="scroll-margin: 150px 0 0 0;"
        />

        <component
          v-for="(link, i) in components"
          :key="link.url"
          :is="link.component"
          :link="link"
          :index="i"
          class="mt-44"
          style="scroll-margin: 150px 0 0 0;"
        />

        <ContactUs class="mt-44" style="scroll-margin: 150px 0 0 0;" />
        <OctaFooter class="mt-64" />
      </div>
    </div>
  </div>
</template>

<script>
import OctaFooter from "../components/page/OctaFooter.vue";
import OctaHeader from "../components/page/OctaHeader.vue";
import MobileHeader from "../components/page/MobileHeader.vue";

export default {
  name: "Tools",
  components: {
    OctaFooter,
    OctaHeader,
    MobileHeader,
  },
  props: {
    logoLink: {
      type: String,
      default: "/",
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    components: [
      {
        url: "#page-editor",
        title: "Page editor",
        component: "page-editor",
      },
      {
        url: "#editions",
        title: "Editions & archive manager",
        component: "editions",
      },
      {
        url: "#program-manager",
        title: "Competitive program manager",
        component: "program-manager",
      },
      {
        url: "#off-season",
        title: "Off-season tools",
        component: "off-season",
      },
      {
        url: "#post-streams",
        title: "Posts streams",
        component: "post-streams",
      },
      {
        url: "#sponsors",
        title: "Sponsors",
        component: "sponsors",
      },
      {
        url: "#users",
        title: "Users",
        component: "users",
      },
      {
        url: "#tag-library",
        title: "Tag library",
        component: "tag-library",
      },
    ],
  }),
};
</script>
