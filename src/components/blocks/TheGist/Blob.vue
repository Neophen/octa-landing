<template>
  <div class="absolute" :style="style">
    <icon :icon="icon" pack="blobs" class="w-full h-full" />
  </div>
</template>

<script>
export default {
  name: "Blob",
  props: {
    icon: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      const [left, top, w, h] = this.position.split(":");
      // console.log(left, top, w, h);
      const x = this.right ? "right" : "left";
      const y = this.bottom ? "bottom" : "top";
      return `${x}: ${left}px; ${y}: ${top}px; width: ${w}px; height: ${h}px;`;
    },
  },
};
</script>
