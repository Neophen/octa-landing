<template>
  <OctaHeader :links="links" :logo-link="logoLink" />
  <MobileHeader />
  <div class="w-full overflow-x-hidden">
    <div class="px-4">
      <div class="container mb-4">
        <component
          v-for="link in components"
          :key="link.url"
          :is="link.component"
          :link="link"
          class="mt-44"
          style="scroll-margin: 150px 0 0 0"
        />

        <ContactUs
          class="mt-44"
          title="Schedule a call"
          style="scroll-margin: 150px 0 0 0"
        />
        <OctaFooter class="mt-64" />
      </div>
    </div>
    <Chat />
  </div>
</template>

<script>
import OctaFooter from "../components/page/OctaFooter.vue";
import OctaHeader from "../components/page/OctaHeader.vue";
import MobileHeader from "../components/page/MobileHeader.vue";
import Chat from "../components/shared/Chat.vue";

export default {
  name: "MainPage",
  components: {
    OctaFooter,
    OctaHeader,
    MobileHeader,
    Chat,
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
  setup() {
    const components = [
      {
        url: "#EmergingProgram",
        title: "EmergingProgram",
        component: "EmergingProgram",
      },
      {
        url: "#ProgramSubscription",
        title: "ProgramSubscription",
        component: "ProgramSubscription",
      },
      {
        url: "#Recommendation",
        title: "Recommendation",
        component: "Recommendation",
      },
      {
        url: "#ProgramCost",
        title: "ProgramCost",
        component: "ProgramCost",
      },
      {
        url: "#HowToBegin",
        title: "HowToBegin",
        component: "HowToBegin",
      },
    ];

    return { components };
  },
};
</script>
