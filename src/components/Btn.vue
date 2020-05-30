<template>
  <component
    :is="tag"
    class="block w-auto py-3 mt-6 font-bold text-center text-white rounded-full cursor-pointer md:inline-block bg-primary-500 text-title hover:bg-primary-400 active:bg-primary-600 focus:outline-none focus:shadow-outline"
    style="width: 180px;"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "Btn",
  props: {
    tag: {
      type: String,
      default: "a",
    },
  },
};
</script>
