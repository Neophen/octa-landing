<template>
  <span id="look" class="invisible block h-20"></span>
  <div class="grid gap-24 mx-auto mt-40 auto-grid">
    <div class="auto-right">
      <img
        src="/central/octafest-looks.gif"
        class="block w-full h-auto sm:hidden"
      />
      <video class="hidden w-full h-auto sm:block" autoplay loop muted>
        <source src="/central/octafest-looks-2.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="auto-left">
      <h2
        class="text-5xl leading-tight text-gray-600 font-display text-h2-fluid"
        style="text-size-adjust: none;"
      >
        Beautifully easy, reliable, fast. Yours.
      </h2>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >
        Let attendees create their own experiences
      </p>
      <p class="mt-1 text-lg leading-normal">
        Make a personal program &amp; schedule in your accounts. Accounts are
        easy. Choose to signup using Facebook, Gmail, or email.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >
        Deliver content with a bang
      </p>
      <p class="mt-1 text-lg leading-normal">
        Program, schedule, archive, text, videos &amp; icon grids - everything a
        festival might need. All wrapped into clear navigation.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >
        Forget about tideous monkey work. Just create
      </p>
      <p class="mt-1 text-lg leading-normal">
        Content is automatically spaced, adjusted for mobiles, and optimized for
        fast loading. Program, news and other lists get updated directly from
        your management panels.
      </p>
      <Btn href="#book-a-demo">Read more</Btn>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  name: "Look",
  components: {
    Btn,
  },
};
</script>
