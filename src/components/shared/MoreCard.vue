<template>
  <component
    :is="cardWrapper"
    :href="url"
    class="relative block overflow-hidden cursor-pointer group rounded-large"
  >
    <div
      class="absolute right-0 w-4/5 h-full rounded-large -z-1 bg-cream-fade-90 group-hover:bg-blue-fade-90"
    ></div>
    <div class="absolute flex justify-center w-full h-full -z-1">
      <div
        class="w-4/5 h-full rounded-large bg-cream-fade-90 group-hover:bg-blue-fade-90"
      ></div>
    </div>
    <div
      class="w-4/5 h-full p-7 bg-cream-500 rounded-large group-hover:bg-blue-300"
    >
      <icon :icon="item.icon" class="w-13 h-13" />
      <oh3 class="mt-3">
        {{ item.title }}
      </oh3>
      <op
        v-if="item.description"
        class="mt-3 text-grey-500 group-hover:text-black"
      >
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
    </div>
  </component>
</template>

<script>
export default {
  name: "MoreCard",
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
