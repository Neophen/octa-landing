<template>
  <div :id="id">
    <oh2 class="mt-5">
      {{ title }}
    </oh2>
    <op class="mt-2">
      {{ description }}
    </op>
    <GridList class="mt-10">
      <Card v-for="item in cards" :key="item.id" :item="item" />
      <MoreCard :item="more" />
    </GridList>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  name: "YourSuccess",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      id: props.link.url.replace("#", ""),
      title: "Evolving for your success",
      description:
        "As a community member, you get access to our support & all the features that we launch.",
    });

    return {
      ...toRefs(state),
    };
  },
  data: () => ({
    cards: [
      {
        id: "support",
        icon: "support",
        title: "Get help in live chat",
        description: "Open for all community members.",
      },
      {
        id: "fresh",
        icon: "fresh",
        title: "Stay fresh",
        description: "Get equipped with modern tools & processes.",
      },
      {
        id: "roadmap",
        icon: "public-roadmap",
        title: "Public roadmap",
        description: "Share feedback and vote for features.",
      },

      {
        id: "people-centered",
        icon: "human-design",
        title: "People centered",
        description: "Best design methodologies in action.",
      },
      {
        id: "hosting-storage",
        icon: "hosting-storage",
        title: "Hosting & storage",
        description: "Keep servers, documents & images where you need them.",
      },
      {
        id: "downtime",
        icon: "downtime",
        title: "Zero downtime",
        description: "We launch new features frequently, but no downtime.",
      },
      {
        id: "backup",
        icon: "backup",
        title: "Daily backups",
        description:
          "Safety first. Your content is backed-up on a daily basis.",
      },
    ],
    more: {
      id: "more",
      icon: "more",
      title: "More on support",
      link: {
        label: "Read more",
        url: "#book-a-demo",
      },
    },
  }),
};
</script>
