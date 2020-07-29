<template>
  <div class="grid gap-5" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, computed, reactive, onUpdated } from "vue";
export default {
  name: "GridList",
  props: {
    height: [String, Number],
    width: {
      type: [String, Number],
      default: "285px",
    },
  },

  setup(props) {
    const style = computed(() => {
      const styles = [];
      const cols = `grid-template-columns: repeat(auto-fill, minmax(${props.width}, 1fr));`;
      styles.push(cols);

      if (props.height) {
        const rows = `grid-auto-rows: minmax(${props.height}, auto);`;
        styles.push(rows);
      }

      return styles.join(" ");
    });

    return { style };
  },
};
</script>
