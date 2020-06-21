<template>
  <div>
    <div class="mt-40 flex flex-col">
      <h3
        class="text-3xl text-center font-display"
      >Login, track &amp; share information the way you like</h3>
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-wrap items-center justify-center">
          <div v-for="item in items" :key="item.id" class="p-6">
            <Integration class="flex-1" :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-col md:flex-row mx-auto mt-24" style="max-width: 998px">
      <div class="flex-1">
        <h4 class="font-display text-2xl">Can't find your favourite tools?</h4>
        <p
          class="text-black text-lg"
        >Let us know what you need, maybe we can bump it in our list of priorities 😎</p>
      </div>
      <div class="flex md:mt-0 mt-5 items-center">
        <a
          class="block align-right w-auto py-3 bg-white font-bold text-center text-white rounded-full cursor-pointer text-title"
          style="width: 180px; border: 0.5px solid #333338; color: #333338;"
          href="#book-a-demo"
        >Send a message</a>
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
