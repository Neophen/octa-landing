<template>
  <OctaHeader />
  <MobileHeader />
  <div class="container mb-4">
    <TheGist />
    <Support />
    <Look />
    <LookOptionTwo />
    <Integrations />
    <ContactUs />
    <OctaFooter class="mt-64" />
  </div>
</template>

<script>
import TheGist from "./components/TheGist.vue";
import ContactUs from "./components/ContactUs.vue";
import OctaFooter from "./components/OctaFooter.vue";
import OctaHeader from "./components/OctaHeader.vue";
import Support from "./components/Support.vue";
import Integrations from "./components/Integrations.vue";
import MobileHeader from "./components/MobileHeader.vue";
import Look from "./components/Look.vue";
import LookOptionTwo from "./components/LookOptionTwo.vue";

export default {
  components: {
    TheGist,
    ContactUs,
    OctaFooter,
    OctaHeader,
    Support,
    Integrations,
    MobileHeader,
    Look,
    LookOptionTwo,
  },
};
</script>
