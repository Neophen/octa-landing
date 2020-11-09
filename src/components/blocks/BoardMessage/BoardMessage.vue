<template>
  <TextIllustration :id="id" :title="title" :img="illustration" blobs>
    <div>
      <oh3>Join our advisory board to get:</oh3>
      <op class="mt-2">
        - To influence the design of industry tools;
        <br />
        - 30% subscription discount for your festival;
      </op>
      <oh3 class="mt-6">What do we expect?</oh3>
      <op class="mt-2">
        - Participation in a monthly board call to review design solutions and
        help prioritize community requests;
        <br />
        - Presence in the #Octafest-design Slack channel to occasionally provide
        feedback on our work-in-progress;
      </op>
    </div>
  </TextIllustration>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "BoardMessage",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      id: props.link.url.replace("#", ""),
      title: "Leaders, dreamers & forward thinkers who shape the industry",
      illustration: "advisory-board.svg",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
