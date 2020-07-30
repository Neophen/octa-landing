<template>
  <TextIllustration :title="title" :img="illustration" blobs>
    <div>
      <oph class="mt-6">
        Designed for flexible flow of information:
      </oph>
      <ol class="mt-2 ml-4 text-lg list-decimal">
        <li v-for="link in links" :key="link.url">
          <a class="underline hover:text-primary-500" :href="link.url">{{
            link.title
          }}</a>
        </li>
      </ol>
    </div>
  </TextIllustration>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "AdvancedToolkit",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      title: "Natural collaboration for your team",
      illustration: "natural-collaboration.svg",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
