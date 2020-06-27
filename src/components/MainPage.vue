<template>
  <OctaHeader />
  <MobileHeader />
  <div class="px-4">
    <div class="container mb-4">
      <TheGist />
      <Tools />
      <Look />
      <LookOptionOne />
      <LookOptionTwo />
      <Support />
      <Integrations />
      <ContactUs />
      <OctaFooter class="mt-64" />
    </div>
  </div>
</template>

<script>
import TheGist from "./TheGist.vue";
import ContactUs from "./ContactUs.vue";
import OctaFooter from "./OctaFooter.vue";
import OctaHeader from "./OctaHeader.vue";
import Support from "./Support.vue";
import Integrations from "./Integrations.vue";
import MobileHeader from "./MobileHeader.vue";
import Look from "./Look.vue";
import LookOptionTwo from "./LookOptionTwo.vue";
import LookOptionOne from "./LookOptionOne.vue";
import Tools from "./Tools.vue";

export default {
  name: "MainPage",
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
    LookOptionOne,
    Tools,
  },
};
</script>
