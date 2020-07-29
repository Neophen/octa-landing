<template>
  <div class="flex flex-col items-center">
    <img :src="photo" width="250" height="250" />
    <h3 class="mt-5 text-2xl leading-tight font-heading">{{ member.name }}</h3>
    <op class="mt-3">{{ member.job }}</op>
    <div class="flex items-center mt-2">
      <icon :icon="member.country" class="w-7 h-7" />
      <op class="ml-2 capitalize">{{ member.country }}</op>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  name: "Member",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  computed: {
    photo() {
      return `/central/photos/${this.member.photo}.png`;
    },
  },
};
</script>
