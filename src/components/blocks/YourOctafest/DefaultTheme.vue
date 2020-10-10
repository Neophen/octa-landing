<template>
  <div>
    <omark>Option 1</omark>
    <oh2 class="mt-5">Create a distinct look using the Octafest theme</oh2>
    <GridList class="mt-10">
      <Card v-for="item in cards" :key="item.id" :item="item" />
      <MoreCard :item="demo" />
    </GridList>
  </div>
</template>

<script>
export default {
  name: "DefaultTheme",
  data: () => ({
    cards: [
      {
        id: "structure",
        icon: "structure",
        title: "Structure & Layout",
        description:
          "Create pages, add & arrange information the way you like.",
      },
      {
        id: "logo",
        icon: "brand",
        title: "Logo",
        description: "We are a whitelabel, just brand it with your logo.",
      },
      {
        id: "fonts",
        icon: "fonts",
        title: "Fonts",
        description: "Change fonts all over the website.",
      },

      {
        id: "colors",
        icon: "colors",
        title: "Colors",
        description: "Use your brand colors for better recognition.",
      },
      {
        id: "icons",
        icon: "star",
        title: "Icons",
        description: "Have an icon style? Replace default icons anytime.",
      },
      {
        id: "photos-videos",
        icon: "camera",
        title: "Photos & Videos",
        description: "Share the festival experience through photos & videos.",
      },
    ],
    demo: {
      id: "demo",
      icon: "demo",
      title: "Signup for demo",
      type: "more",
      link: {
        label: "Signup",
        url: "#book-a-demo",
      },
    },
  }),
};
</script>
