<template>
  <div class="grid gap-24 mx-auto mt-40 auto-grid">
    <icon icon="the-gist" class="auto-right" />
    <div class="auto-left">
      <h2 class="text-5xl leading-tight font-display text-h2-fluid">
        The only tool you need to run a film festival
      </h2>
      <p class="mt-6 text-lg leading-normal">
        Put your tech hassles away and do what you do best. Collaborate with
        your team to create a memorable festival experience for your guests.
      </p>
      <Btn href="#book-a-demo">
        Book a demo
      </Btn>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";

export default {
  name: "TheGist",
  components: {
    Icon,
    Btn,
  },
};
</script>
