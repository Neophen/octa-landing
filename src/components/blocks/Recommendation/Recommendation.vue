<template>
  <div :id="id" class="w-auto mx-auto">
    <div
      class="p-6 mx-auto rounded-large bg-cream-500"
      style="max-width: 856px"
    >
      <div class="flex space-x-4">
        <img
          src="/central/photos/dmitrij.png"
          alt="Dmitrij's photo"
          class="flex-shrink-0 w-20 h-20"
          width="80"
          height="80"
        />
        <div class="flex flex-col justify-center space-y-2">
          <h3 class="font-heading">Dmitrij Glusevskij</h3>
          <op
            >Co-founder &amp; Programmer
            <a href="https://pirmojibanga.lt" target="_blank" class="hover:underline">@Pirmoji Banga
            Film Festival</a></op
          >
        </div>
      </div>
      <p class="mt-6 text-3xl italic font-light">
        “Octafest saved us a bunch of work-hours on technical things we didn’t
        really like spending our time on. Like putting together a screening
        schedule or publishing the program.”
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Recommendation",
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
};
</script>
