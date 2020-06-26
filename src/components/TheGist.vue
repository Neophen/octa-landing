<template>
  <span id="the-gist" class="block h-20 -mt-20 invisible"></span>
  <div class="grid gap-24 mx-auto mt-10 auto-grid">
    <div class="auto-right">
      <img src="/central/the-gist.svg" class="w-full h-auto" />
    </div>
    <div class="auto-left">
      <h2
        class="text-4xl leading-tight text-gray-600 font-display"
      >The only tool you need to run a film festival</h2>
      <p
        class="mt-6 text-lg leading-normal"
      >Leave tech hassles behind and enjoy the creative freedom. Collaborate with your team to create a memorable festival experience for your guests.</p>
      <Btn href="#book-a-demo">Book a demo</Btn>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  name: "TheGist",
  components: {
    Btn,
  },
};
</script>
