<template>
  <div class="flex flex-col items-center mt-8 space-y-4">
    <a
      :href="item.link"
      target="_blank"
      class="flex items-center justify-center w-32 h-32 bg-white rounded-full shadow"
    >
      <icon v-if="icon" class="w-20 h-20" :icon="item.icon" pack="integrations" />
      <img v-else class="w-20 h-20" :src="imgSrc" />
    </a>
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  name: "Integration",
  props: {
    item: {
      type: Object,
      required: true,
    },
    icon: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    imgSrc() {
      return this.icon ? null : `/central/icons/integrations/${this.item.icon}`;
    }
  },
};
</script>
