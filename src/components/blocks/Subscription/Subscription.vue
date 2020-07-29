<template>
  <div>
    <oh2>Octafest subscription includes</oh2>
    <GridList width="266px" class="mt-10">
      <Card v-for="item in cards" :key="item.id" :item="item" />
    </GridList>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  setup() {
    const cards = [
      {
        id: "sub-management-tools",
        icon: "intuitive",
        title: "Intuitive management tools",
        description:
          "Collaborate with your team, add films, events, guests, competitions, schedule & other elements of your edition.",
      },
      {
        id: "sub-reliable-website",
        icon: "deliver-content",
        title: "Modern & reliable website",
        description:
          "Designed for the best film festival experience & integrated with management tools for automtation.",
      },
      {
        id: "sub-support",
        icon: "collaborate",
        title: "Technical & design support",
        description:
          "We take care of the servers, content delivery networks, and certificates. Your team gets the latest tools to work with.",
      },
    ];

    return { cards };
  },
};
</script>
