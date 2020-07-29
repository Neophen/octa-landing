<template>
  <span id="integrations" class="block h-20 invisible"></span>
  <div>
    <div class="flex flex-col mt-40">
      <h3
        class="text-3xl text-center font-heading"
      >Login, track &amp; share information the way you like</h3>
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-wrap items-center justify-center">
          <div v-for="item in items" :key="item.id" class="p-4 md:p-6">
            <Integration class="flex-1" :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-wrap mx-auto mt-24 md:flex-row" style="max-width: 998px">
      <div class="flex-1">
        <h4 class="text-2xl font-heading">Can't find your favourite tools?</h4>
        <p
          class="text-lg text-black"
        >Let us know what you need, maybe we can bump it in our list of priorities 😎</p>
      </div>
      <div class="flex items-center mt-5 md:mt-0">
        <a
          class="block w-auto py-3 font-bold text-center text-white bg-white rounded-full cursor-pointer align-right text-title"
          style="width: 180px; border: 0.5px solid #333338; color: #333338;"
          href="#book-a-demo"
        >Send a message</a>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import Integration from "./Integration.vue";

export default {
  name: "Integrations",
  components: {
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
