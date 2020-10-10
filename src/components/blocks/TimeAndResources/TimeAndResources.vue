<template>
  <div :id="id">
    <oh2>{{ title }}</oh2>
    <div class="flex flex-col items-start mt-6 lg:space-x-10 lg:flex-row">
      <div style="max-width: 493px">
        <op class="font-semibold text-gray-600 font-heading">
          Save money on website maintenance
        </op>
        <op class="mt-1">
          With Octafest all-in-one toolkit, you will no longer need to hire
          freelancers to maintain your website and integrated digital tools.
        </op>
        <op class="mt-6 font-semibold text-gray-600 font-heading">
          Save money &amp; nature with digital accreditations
        </op>
        <op class="mt-1">
          How many accreditations do you print each year? Octafest digital
          accreditations give full experience without any plastic cards.
        </op>
        <op class="mt-6 font-semibold font-heading">
          Take advantage of all the freed-up time
        </op>
        <op class="mt-1">
          All tech and repetitive hassles are taken care of. Use this time,
          saved money and collaborative tools create more stories for your
          guests.
        </op>
        <Btn href="#book-a-demo">Book a demo</Btn>
      </div>
      <div
        class="flex flex-col-reverse items-center flex-1 mt-6 space-x-5 sm:flex-row lg:flex-row xl:flex-row bg-cream-500 p-7 lg:mt-0 rounded-large"
      >
        <op class="text-xl italic text-center sm:text-left"
          >“Truly simple and fast film information uploading.
          <br />
          <br />
          There is no need for special technical knowledge, any team member or
          volunteer will manage to upload and edit needed information with a bit
          of introduction to the tool.
          <br />
          <br />
          Libraries of tags, genres, people, awards allows a convenient
          automated filling.”
        </op>
        <div
          class="flex flex-col justify-center flex-shrink-0 mb-5 lg:mb-5 xl:mb-0"
        >
          <img
            src="/central/photos/mingaile.png"
            alt="Mingaile's photo"
            height="184"
            width="184"
            class="mx-auto"
          />
          <div class="mt-5 text-center">
            <h4 class="text-lg font-heading">Mingailė Dadurkevičiūtė</h4>
            <p class="mt-1 text-xs">
              Administrator
              <a
                href="https://scanorama.lt"
                target="_blank"
                class="hover:underline"
                >@Scanorama</a
              >
              IFF
            </p>
            <a href="https://scanorama.lt" target="_blank">
              <Icon icon="scanorama" class="w-24 h-8 mx-auto mt-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Icon from "../../shared/Icon.vue";

export default {
  name: "TimeAndResources",
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
      title: "Save time & resources",
      illustration: "the-gist.svg",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
