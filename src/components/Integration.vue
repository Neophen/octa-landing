<template>
  <div class="flex flex-col space-y-4 items-center mt-8">
    <a
      :href="item.link"
      target="_blank"
      class="bg-white shadow rounded-full flex items-center justify-center h-32 w-32"
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
