<template>
  <div id="the-gist" class="grid gap-24 mx-auto mt-10 auto-grid">
    <div class="relative auto-right">
      <img src="/central/illustrations/the-gist.svg" class="w-full h-auto" />
      <blob icon="rounded-blue" position="-282:0:64:78" right />
      <blob icon="u-cream" position="-124:463:51:42" right />
    </div>
    <div class="relative auto-left">
      <oh2>
        The only tool you need to run a film festival
      </oh2>
      <op class="mt-6">
        Leave tech hassles behind and enjoy the creative freedom. Collaborate
        with your team to create a memorable festival experience for your
        guests.
      </op>
      <Btn href="#book-a-demo">Book a demo</Btn>
      <blob icon="u-blue" position="-283:-45:31:31" />
      <blob icon="rounded-cream" position="-121:331:59:52" />
    </div>
  </div>
</template>

<script>
import Blob from "./Blob.vue";

export default {
  name: "TheGist",
  components: {
    Blob,
  },
};
</script>
