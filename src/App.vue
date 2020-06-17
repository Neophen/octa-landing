<template>
<div class="container mb-4">
  <TheGist />
  <ContactUs />
  <OctaFooter class="mt-64" />
  <p>amazing</p>
</div>
</template>

<script>
import TheGist from "./components/TheGist.vue";
import ContactUs from './components/ContactUs.vue';
import OctaFooter from './components/OctaFooter.vue';

export default {
  components: {
    TheGist,
    ContactUs,
    OctaFooter,
  },
}
</script>
