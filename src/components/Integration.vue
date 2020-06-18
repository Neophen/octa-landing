<template>
  <div class="flex flex-col items-center mt-8 space-y-4">
    <a
      :href="item.link"
      target="_blank"
      class="flex items-center justify-center w-32 h-32 bg-white rounded-full shadow"
    >
      <icon class="w-20 h-20" :icon="item.icon" />
    </a>
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";

export default {
  name: "Integration",
  components: {
    Icon,
    Btn,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
