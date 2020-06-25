<template>
  <div class="grid gap-16 mx-auto mt-40 auto-grid">
    <div class="auto-right">
      <img src="/central/custom-theme.svg" class="w-full h-auto" />
    </div>
    <div>
      <h3 class="absolute text-2xl font-display text-bold">Option 2</h3>
      <div class="mt-3 mb-5">
        <icon icon="highlight" style="width: 129px; height: 20px" />
      </div>
      <h2
        class="text-5xl leading-tight text-gray-600 font-display text-h2-fluid"
        style="text-size-adjust:none;"
      >Order a custom theme</h2>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
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
