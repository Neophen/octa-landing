<template>
  <div :id="id" class="w-auto p-6 mx-auto bg-cream-500" style="width: 856px">
    <div class="flex space-x-4">
      <img
        src="/central/photos/dmitrij.png"
        alt="Dmitrij's photo"
        width="70"
        height="70"
      />
      <div class="flex flex-col justify-center space-y-2">
        <h3 class="font-heading">Dmitrij Glusevskij</h3>
        <op>Co-founder &amp; Programmer <a href="https://pirmojibanga.lt" target="_blank">@Pirmoji Banga</a> Film Festival</op>
      </div>
    </div>
    <op class="mt-6 text-2xl italic font-light"
      >“Octafest saved us a bunch of work-hours on technical things we <br />
      didn’t really like spending our time on. Like putting together a <br />
      screening schedule or publishing the program.”</op
    >
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
