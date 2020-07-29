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
        <p
          class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
        >
          Let attendees create their own experiences
        </p>
        <p class="mt-1 text-lg leading-normal">
          Make a personal program &amp; schedule in your accounts. Accounts are
          easy. Choose to signup using Facebook, Gmail, or email.
        </p>
        <p
          class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
        >
          Deliver content with a bang
        </p>
        <p class="mt-1 text-lg leading-normal">
          Program, schedule, archive, text, videos &amp; icon grids - everything
          a festival might need. All wrapped into clear navigation.
        </p>
        <p
          class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
        >
          Forget about tideous monkey work. Just create
        </p>
        <p class="mt-1 text-lg leading-normal">
          Content is automatically spaced, adjusted for mobiles, and optimized
          for fast loading. Program, news and other lists get updated directly
          from your management panels.
        </p>
        <Btn href="#book-a-demo">Read more</Btn>
      </div>
    </TextIllustration>
    <DefaultTheme class="mt-44" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import DefaultTheme from './DefaultTheme.vue';

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
