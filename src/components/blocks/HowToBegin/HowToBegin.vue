<template>
  <div :id="id" class="p-6 mx-auto">
    <oh2>{{ title }}</oh2>

    <div class="w-full mt-5 space-y-5" style="max-width: 1200px">
      <div class="flex py-2 pl-6 space-x-4 rounded-small bg-cream-500">
        <Icon icon="schedule" class="flex-shrink-0 w-8 h-8" />
        <op
          ><a href="#book-a-demo" class="underline">Schedule a call</a> with us
          to apply for the program.</op
        >
      </div>
      <div
        v-for="row in rows"
        class="flex py-2 pl-6 pr-8 space-x-4 rounded-small bg-cream-500"
        :key="row.description"
      >
        <Icon :icon="row.icon" class="flex-shrink-0 w-8 h-8" />
        <op>{{ row.description }}</op>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Icon from "../../shared/Icon.vue";

export default {
  name: "HowToBegin",
  components: {
    Icon,
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      id: props.link.url.replace("#", ""),
      title: "How to begin?",
      rows: [
        {
          icon: "a_z",
          description: `Buy a domain name if you don't have it yet. No need to buy hosting,
          it's included in the Octafest plan.`,
        },
        {
          icon: "deliver-content",
          description: `Octafest design team will set up your website to match your festival
          identity and help structure your data in 3 days.`,
        },
        {
          icon: "setup",
          description: `Octafest tech team will connect your tools & website. If it is
          your first edition, setup will take 3 days. If you had a website
          before and want to keep its archive, the migration and setup process
          will take up to 2 weeks.`,
        },
        {
          icon: "recommendations-bold",
          description: `You have the keys, time to invite your team and start planning your
          festival!`,
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
