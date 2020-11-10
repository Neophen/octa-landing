<template>
  <div
    class="flex flex-col items-center py-5 cursor-pointer px-7 group bg-cream-500 hover:bg-white hover:shadow-card rounded-large"
    style="min-height: 407px"
  >
    <Icon icon="join_board" class="flex-shrink-0 w-40 h-40" />
    <oh3 class="mt-8 text-2xl text-center" style="max-width: 155px">
      {{ item.title }}
    </oh3>
    <div class="mt-3 border-t border-black" style="width: 39px"></div>
    <op class="mt-3 text-center text-black-400 group-hover:text-black">
      <a class="underline" :href="item.contact_block">{{
        item.contact_link
      }}</a>
      {{ item.description }}
    </op>
  </div>
</template>

<script>
export default {
  name: "JoinCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
