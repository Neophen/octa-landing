<template>
  <div
    class="cursor-pointer p-7 group bg-cream-500 text-default hover:bg-white hover:shadow-card rounded-large"
  >
    <icon :icon="item.icon" class="w-13 h-13" />
    <oh3 class="mt-3">
      {{ item.title }}
    </oh3>
    <op class="mt-3 text-grey-500 group-hover:text-black">
      {{ item.description }}
    </op>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
