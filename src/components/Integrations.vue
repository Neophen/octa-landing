<template>
  <div class="mt-40">
    <h3 class="text-3xl text-center font-display">
      Login, track &amp; share information the way you like
    </h3>
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-wrap items-center justify-center -m-6">
        <div v-for="item in items" :key="item.id" class="p-6">
          <Integration class="flex-1" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";
import Integration from "./Integration.vue";

export default {
  name: "Integrations",
  components: {
    Icon,
    Btn,
    Integration,
  },
  setup() {
    const items = [
      {
        id: 1,
        icon: "facebook",
        title: "Facebook",
        link: "http://facebook.com",
      },
      {
        id: 2,
        icon: "google",
        title: "Google",
        link: "http://google.com",
      },
      {
        id: 3,
        icon: "mailchimp",
        title: "Mailchimp",
        link: "http://mailchimp.com",
      },
      {
        id: 4,
        icon: "google-analytics",
        title: "Google Analytics",
        link: "http://analytics.google.com",
      },
      {
        id: 5,
        icon: "hotjar",
        title: "HotJar",
        link: "http://hotjar.com",
      },
      {
        id: 6,
        icon: "slack",
        title: "Slack",
        link: "http://slack.com",
      },
      {
        id: 7,
        icon: "twitter",
        title: "Twitter",
        link: "http://twitter.com",
      },
      {
        id: 8,
        icon: "instagram",
        title: "Instagram",
        link: "http://instagram.com",
      },
    ];
    return { items };
  },
};
</script>
