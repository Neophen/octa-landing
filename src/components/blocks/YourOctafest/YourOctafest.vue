<template>
  <div>
    <TextIllustration :id="id" :title="title">
      <template v-slot:image>
        <img
          src="/central/animations/octafest-looks.gif"
          class="block w-full h-auto sm:hidden"
        />
        <video class="hidden w-full h-auto sm:block" autoplay loop muted>
          <source
            src="/central/animations/octafest-looks.mp4"
            type="video/mp4"
          />
        </video>
      </template>
      <div>
        <op
          class="mt-6 font-semibold text-gray-600 font-heading"
        >
          Let attendees create their own experiences
        </op>
        <op class="mt-1">
          Make a personal program &amp; schedule in your accounts. Accounts are
          easy. Choose to signup using Facebook, Gmail, or email.
        </op>
        <op
          class="mt-6 font-semibold text-gray-600 font-heading"
        >
          Deliver content with a bang
        </op>
        <op class="mt-1">
          Program, schedule, archive, text, videos &amp; icon grids - everything
          a festival might need. All wrapped into clear navigation.
        </op>
        <op
          class="mt-6 font-semibold font-heading"
        >
          Forget about tideous monkey work. Just create
        </op>
        <op class="mt-1">
          Content is automatically spaced, adjusted for mobiles, and optimized
          for fast loading. Program, news and other lists get updated directly
          from your management panels.
        </op>
        <Btn href="#book-a-demo">Read more</Btn>
      </div>
    </TextIllustration>
    <DefaultTheme class="mt-44" />
    <TextIllustration
      title="Order a custom theme"
      img="custom-theme.svg"
      mark="Option 2"
      class="mt-44"
    >
      <div>
        <op class="mt-6 font-semibold font-heading">
          Specifically for your festival, our design team will:
        </op>
        <op class="mt-1">
          • Create a new interface library;
        </op>
        <op class="mt-1">
          • Help structure your content for easy navigation &amp; accessibility;
        </op>
        <op class="mt-1">
          • Create icon &amp; illustration kit;
        </op>
        <op class="mt-1">
          With a custom theme, you will still get continious updates, support
          and all the features of Octafest.
        </op>
        <Btn href="#book-a-demo">Get a quote</Btn>
      </div>
    </TextIllustration>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import DefaultTheme from "./DefaultTheme.vue";

export default {
  name: "YourOctafest",
  components: {
    DefaultTheme,
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
      title: "Beautifully easy, reliable, fast. Yours.",
      illustration: "the-gist.svg",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
