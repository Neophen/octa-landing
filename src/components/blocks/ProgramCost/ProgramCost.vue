<template>
  <div :id="id" class="p-6 mx-auto">
    <oh2>{{ title }}</oh2>
    <div class="flex flex-wrap mt-6 space-y-10 md:space-y-0 md:space-x-10">
      <div class="w-full md:flex-1">
        <oh3>Transparent yearly subscription fee:</oh3>
        <op class="mt-2">1st year: 599 EUR</op>
        <op>2nd year: 699 EUR</op>
        <op>3rd year: 799 EUR</op>
        <op>4th year: 899 EUR</op>
        <op>5th year: 999 EUR</op>
        <op class="mt-2"
          >No hidden costs. No one likes training, installation, or upgrade
          charges.</op
        >
      </div>
      <div class="w-full md:flex-1">
        <oh3>What happens after 5th year?</oh3>
        <op class="mt-2"
          >After your festival has reached it’s 5th year, we will evaluate your
          situation. </op
        ><br />
        <op>
          If you have grown to a wider audience, we will offer a regular
          Octafest contract. </op
        ><br />
        <op>
          In case your festival remains dedicated to a smaller, niche audience
          we will continue to support you at a discounted rate.</op
        ><br />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "ProgramCost",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      id: props.link.url.replace("#", ""),
      title: "What will it cost?",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
