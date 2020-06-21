<template>
  <div class="grid gap-16 mx-auto mt-40 auto-grid">
    <div class="auto-right">
      <img src="/custom-theme.svg" class="w-full h-auto" />
    </div>
    <div class="auto-left">
      <h3 class="absolute font-display text-2xl text-bold ">Option 2</h3>
      <div class="mb-5 mt-3">
        <icon class icon="highlight" style="width: 129px; height: 20px" />
      </div>
      <h2
        class="text-5xl leading-tight text-gray-600 font-display text-h2-fluid"
      >Order a custom theme</h2>
      <p
        class="mt-6 text-lg leading-normal font-display font-semibold text-gray-600"
      >Specifically for your festival, our design team will:</p>
      <p class="mt-1 text-lg leading-normal">• Create a new interface library;</p>
      <p
        class="mt-1 text-lg leading-normal"
      >• Help structure your content for easy navigation &amp; accessibility;</p>
      <p class="mt-1 text-lg leading-normal">• Create icon &amp; illustration kit;</p>
      <p
        class="mt-1 text-lg leading-normal"
      >With a custom theme, you will still get continious updates, support and all the features of Octafest.</p>
      <Btn href="#book-a-demo">Get a quote</Btn>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";

export default {
  name: "LookOptionTwo",
  components: {
    Icon,
    Btn,
  },
};
</script>
