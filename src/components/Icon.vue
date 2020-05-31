<template>
  <div>
    <svg class="fill-current block w-full h-full">
      <use :href="iconPath" :xlink:href="iconPath" />
    </svg>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Icon",
  props: {
    icon: String,
  },
  setup(props, { root }) {
    const iconPath = computed(() => {
      return `/illustrations.svg#${props.icon}`;
    });

    return { iconPath };
  },
};
</script>
