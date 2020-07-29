<template>
  <div>
    <svg class="block w-full h-full fill-current">
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
    pack: {
      type: String,
      default: "general",
    },
  },
  setup(props, { root }) {
    const iconPath = computed(() => {
      return `/central/icons/${props.pack}/index.svg#${props.icon}`;
    });

    return { iconPath };
  },
};
</script>
