<template>
  <div :id="id" class="relative">
    <Blob icon="circle-1-blue" position="-100:255:253:247" />
    <Blob icon="box-cream" position="0:100:266:199" right />
    <Blob icon="eye" position="50:100:166:206" right />
    <oh2>{{ link.title }}</oh2>
    <GridList width="279px" class="mt-10">
      <MemberCard v-for="item in cards" :key="item.id" :item="item" />
      <JoinCard :item="joinCard" />
    </GridList>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "BoardMembers",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const cards = [
      {
        id: "Dmitrij",
        img: "/central/photos/dmitrij.png",
        alt: "Dmitrij's photo",
        title: "Dmitrij Gluscevskij",
        description: "Festival Programmer",
        icon: "scanorama",
        icon_url: "https://scanorama.lt",
      },
      {
        id: "Edvinas",
        img: "/central/photos/edvinas.png",
        alt: "Edvinas's photo",
        title: "Edvinas Pukšta",
        description: "Festival Programmer",
        icon: "poff",
        icon_url: "https://poff.ee",
      },
    ];

    const joinCard = {
      id: "#JoinBoard",
      icon: "join-board.svg",
      title: "Join our board",
      contact_link: "Hop on call",
      contact_block: "#book-a-demo",
      description: "with us to see if our vision aligns",
    };

    const state = reactive({
      id: props.link.url.replace("#", ""),
    });

    return { cards, joinCard, ...toRefs(state) };
  },
};
</script>
