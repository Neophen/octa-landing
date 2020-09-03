<template>
  <TextIllustration :id="id" :title="title" :img="illustration" blobs>
    <div>
      <op>
        Starting a new festival is tough. Little money, messy processes, and
        thin community support.
        <br>
        <br>
        The goal of this program is to equip you with
        the right tools low cost. Tools that will save you time so even
        micro-teams could achieve ambitious goals.
        <br>
        <br>
        To qualify for this program
        your festival has to be under 5 years of age.
      </op>
    </div>
  </TextIllustration>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "EmergingProgram",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      id: props.link.url.replace("#", ""),
      title: "Emerging film festival program",
      illustration: "emerging-festivals.svg",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
