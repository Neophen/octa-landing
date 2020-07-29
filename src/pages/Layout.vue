<template>
  <OctaHeader :links="links" :logo-link="logoLink" />
  <MobileHeader />
  <div class="px-4">
    <div class="container mb-4">
      <component
        v-for="link in links"
        :key="link.url"
        :is="link.component"
        :link="link"
        class="mt-44"
        style="scroll-margin: 150px 0 0 0;"
      />

      <ContactUs class="mt-44" style="scroll-margin: 150px 0 0 0;" />
      <OctaFooter class="mt-64" />
    </div>
  </div>
</template>

<script>
import OctaFooter from "../components/page/OctaFooter.vue";
import OctaHeader from "../components/page/OctaHeader.vue";
import MobileHeader from "../components/page/MobileHeader.vue";

export default {
  name: "MainPage",
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
};
</script>
