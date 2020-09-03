<template>
  <div :id="id" class="relative">
    <blob icon="circle-1-blue" position="-100:255:253:247" />
    <blob icon="box-cream" position="0:100:266:199" right />
    <blob icon="eye" position="50:100:166:206" right />
    <oh2>{{ title }}</oh2>
    <GridList width="266px" class="mt-10">
      <Card v-for="item in cards" :key="item.id" :item="item" />
    </GridList>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "ProgramSubscription",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const cards = [
      {
        id: "sub-festival-management-toolkit",
        icon: "intuitive",
        title: "Film festival management toolkit",
        description:
          "Collaborate with your team, add films, events, guests, competitions, schedule & other elements of your edition.",
        link: {
          label: "Learn more",
          url: "/tools",
        },
      },
      {
        id: "sub-festival-website-hosting",
        icon: "deliver-content",
        title: "Festival website + hosting",
        description:
          "Designed to represent your festival identity. Linked with management tools for automatization of your team workflow.",
        link: {
          label: "Learn more",
          url: "#look",
        },
      },
      {
        id: "sub-support",
        icon: "collaborate",
        title: "Tech & design support",
        description:
          "We take care of the servers, content delivery networks, and certificates.\nYour team gets the latest tools to work with.",
        link: {
          label: "Learn more",
          url: "#support",
        },
      },
    ];

    const state = reactive({
      id: props.link.url.replace("#", ""),
      title: "What you get:",
    });

    return {
      ...toRefs(state),
      cards,
    };
  },
};
</script>
