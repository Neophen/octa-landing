<template>
  <div :id="id">
    <TextIllustration :title="title">
      <template v-slot:image>
        <OctaVideo video="octafest-edition-manager" />
      </template>
      <div>
        <op class="mt-6">
          Running a film festival is hard. Doing it without festival specific
          tools 😱... is insanely hard.
        </op>
        <op class="mt-6">
          We dedicated our time to create tools specifically for film festials,
          so you could enjoy your creative freedom! 👉
        </op>
      </div>
    </TextIllustration>
    <div class="mt-20">
      <oh2> Tools for film festivals of any size </oh2>
      <GridList class="mt-10">
        <Card v-for="item in cards" :key="item.id" :item="item" />
      </GridList>
    </div>
    <TextIllustration
      title="Archive made easy"
      img="octafest-archive.svg"
      class="mt-20"
    >
      <div>
        <oph class="mt-6"> Import your history </oph>
        <op class="mt-2">
          Your previous editions is an important asset. So we can help you
          import your story into Octafest.
        </op>
        <oph class="mt-6"> Change anything, anytime </oph>
        <op class="mt-2">
          Archive uses the same tools as your edition manager. So you can go
          back and update anything if you need to.
        </op>
      </div>
    </TextIllustration>
  </div>
</template>

<script>
export default {
  name: "Editions",
  props: {
    link: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    cards: [
      {
        id: "films",
        icon: "film",
        title: "Films",
        description: "Add feature & short films with an easy form.",
      },
      {
        id: "Events",
        icon: "star",
        title: "Events",
        description: "Create workshops, Q&As, panel discussions, and others.",
      },
      {
        id: "Bundles",
        icon: "bundles",
        title: "Bundles",
        description: "Combine screenings & events. In any amount and order.",
      },

      {
        id: "sections",
        icon: "sections",
        title: "Sections",
        description: "Separate your films and events into sections",
      },
      {
        id: "sponsors",
        icon: "sponsor",
        title: "Sponsors",
        description: "Weave them into films, events, or recommendations.",
      },
      {
        id: "Recommendations",
        icon: "recommendations-bold",
        title: "Recommendations",
        description: "Highlights for niche groups: Deep arthouse, Family, etc.",
      },
      {
        id: "schedule",
        icon: "schedule",
        title: "Schedule",
        description: "Weave them into films, events, or recommendations.",
      },
      {
        id: "location",
        icon: "location",
        title: "Cities & venues",
        description: "Add any amount of festival locations.",
      },
    ],
  }),
  computed: {
    title() {
      return `${this.index + 1}. ${this.link.title}`;
    },
    id() {
      return this.link.url.replace("#", "");
    },
  },
};
</script>
