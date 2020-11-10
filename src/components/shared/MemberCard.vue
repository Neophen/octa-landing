<template>
  <component
    :is="cardWrapper"
    :href="url"
    class="flex flex-col items-center p-7 bg-cream-500 rounded-large"
  >
    <img
      :src="item.img"
      :alt="item.alt"
      class="flex-shrink-0"
      width="161"
      height="161"
    />
    <oh3 class="mt-6 text-2xl text-center" style="max-width: 155px">
      {{ item.title }}
    </oh3>
    <div class="mt-3 border-t border-black" style="width: 39px"></div>
    <op class="mt-3 text-black-400">
      {{ item.description }}
    </op>
    <div class="mt-3">
      <a :href="item.icon_url" target="blank_">
        <Icon
          class="text-grey-500"
          style="width: 115px; height: 40px"
          :icon="item.icon"
        />
      </a>
    </div>
  </component>
</template>

<script>
export default {
  name: "MemberCard",
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
