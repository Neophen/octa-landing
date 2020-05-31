<template>
  <svg class="fill-current inline-block" >
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "Icon",
  props: {
    icon: String,
  },
  setup(props, { root }) {
    const iconPath = computed(() => {
      return `/illustrations#${props.icon}`;
    });

    return { iconPath };
  },
};
</script>
