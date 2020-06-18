<template>
  <div class="grid gap-24 mx-auto mt-40 auto-grid">
    <div class="grid grid-cols-2 gap-6 auto-right">
      <div
        class="relative block p-3 rounded group bg-cream-500 text-default hover:bg-white hover:shadow-md"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <icon icon="chat" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
        </div>
        <h3
          class="relative mt-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >Get help in live chat</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Open for all community members</p>
      </div>
      <div
        class="relative block p-3 rounded group bg-cream-500 text-default hover:bg-white hover:shadow-md"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <icon icon="bicycle" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
        </div>
        <h3
          class="relative mt-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >Public roadmap</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Share feedback and vote for features</p>
      </div>
      <div
        class="relative block p-3 group bg-cream-500 text-default hover:bg-white hover:shadow-md"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <icon icon="fresh-drink" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
        </div>
        <h3
          class="relative mt-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >Stay fresh</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Get equipped with modern tools &amp; processes</p>
      </div>
      <div
        class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-md"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <icon icon="hand" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
        </div>
        <h3
          class="relative mt-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >User centered design</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Best design methodologies in action</p>
      </div>
    </div>
    <div class="auto-left">
      <h2
        class="text-5xl leading-tight text-gray-600 font-display text-h2-fluid"
      >The only tool you need to run a film festival</h2>
      <p class="mt-6 text-lg leading-normal">
        As a community member you will always have access to the latest tools and our continious support.
        <br />
        <br />We will kepp you ahead of the industry using:
        <br />• In-depth, one-to-one interviews with festival attendees;
        <br />• Design workshops with your teams;
        <br />• Community feedback &amp; requests;
        <br />• User behavior analysis using HotJar &amp; Google Analytics;
      </p>
      <Btn href="#book-a-demo">Read more</Btn>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";

export default {
  name: "Support",
  components: {
    Icon,
    Btn,
  },
};
</script>
