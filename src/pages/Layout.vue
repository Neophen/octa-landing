<template>
  <OctaHeader :links="links" :logo-link="logoLink" />
  <!-- <MobileHeader /> -->
  <div class="px-4">
    <div class="container mb-4">
      <component v-for="link in links" :key="link.url" :is="link.component" class="pt-20" />
      <!-- <TheGist />
      <Tools />
      <Look />
      <LookOptionOne />
      <LookOptionTwo />
      <Support />
      <Integrations />
      <ContactUs />
      <OctaFooter class="mt-64" /> -->
    </div>
  </div>
</template>

<script>
import OctaFooter from "../components/page/OctaFooter.vue";
import OctaHeader from "../components/page/OctaHeader.vue";
// import MobileHeader from "../components/page/MobileHeader.vue";

export default {
  name: "MainPage",
  components: {
    OctaFooter,
    OctaHeader,
    // MobileHeader,
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
