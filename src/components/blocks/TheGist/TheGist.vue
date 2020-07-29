<template>
  <TextIllustration :id="id" :title="title" :img="illustration" blobs>
    <div>
      <op>
        Leave tech hassles behind and enjoy the creative freedom. Collaborate
        with your team to create a memorable festival experience for your
        guests.
      </op>
      <Btn href="#book-a-demo">Book a demo</Btn>
    </div>
  </TextIllustration>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "TheGist",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      id: props.link.url.replace('#',''),
      title: "The only tool you need to run a film festival",
      illustration: "the-gist.svg",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
