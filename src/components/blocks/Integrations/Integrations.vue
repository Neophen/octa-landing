<template>
  <div :id="id">
    <h3 class="text-2xl text-center font-heading">{{ title }}</h3>
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-wrap items-center justify-center">
        <div v-for="item in items" :key="item.title" class="p-4 md:p-6">
          <Integration class="flex-1" :item="item" />
        </div>
        <div class="p-4 md:p-6">
          <Integration class="flex-1" :item="instagram" :icon="false" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col flex-wrap mx-auto mt-24 md:flex-row"
      style="max-width: 998px"
    >
      <div class="flex-1">
        <h3 class="text-2xl font-heading">Can't find your favourite tools?</h3>
        <p class="text-lg text-black">
          Let us know what you need, maybe we can bump it in our list of
          priorities 😎
        </p>
      </div>
      <div class="flex items-center mt-5 md:mt-0">
        <Btn href="#book-a-demo">Send a message</Btn>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Integration from "./Integration.vue";

export default {
  name: "Integrations",
  components: {
    Integration,
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
    });

    return {
      ...toRefs(state),
    };
  },
  data: () => ({
    title: "Login, track & share information the way you like",
    items: [
      {
        icon: "facebook",
        title: "Facebook",
        link: "http://facebook.com",
      },
      {
        icon: "google",
        title: "Google",
        link: "http://google.com",
      },
      {
        icon: "mailchimp",
        title: "Mailchimp",
        link: "http://mailchimp.com",
      },
      {
        icon: "google-analytics",
        title: "Google Analytics",
        link: "http://analytics.google.com",
      },
      {
        icon: "hotjar",
        title: "HotJar",
        link: "http://hotjar.com",
      },
      {
        icon: "slack",
        title: "Slack",
        link: "http://slack.com",
      },
      {
        icon: "twitter",
        title: "Twitter",
        link: "http://twitter.com",
      },
    ],
    instagram: {
      icon: "instagram.png",
      title: "Instagram",
      link: "http://instagram.com",
    },
  }),
};
</script>
