<template>
  <component
    :is="cardWrapper"
    :href="url"
    class="cursor-pointer p-7 group bg-cream-500 hover:bg-white hover:shadow-card rounded-large"
  >
    <icon :icon="item.icon" class="w-13 h-13" />
    <oh3 class="mt-3">
      {{ item.title }}
    </oh3>
    <op class="mt-3 text-grey-500 group-hover:text-black">
      {{ item.description }}
    </op>
    <div v-if="url" class="flex items-center mt-3 space-x-2">
      <op class="text-grey-500 group-hover:text-black">
        {{ item.link.label }}
      </op>
      <icon
        icon="link-circle"
        class="w-6 h-6 text-grey-500 group-hover:text-black"
      />
    </div>
  </component>
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
  computed: {
    cardWrapper() {
      return this.item.link ? "a" : "div";
    },
    url() {
      return this.item.link ? this.item.link.url : null;
    },
  },
};
</script>
