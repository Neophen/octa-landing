<template>
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-teal-100 bg-opacity-75 overflow-hidded"
  >
    <div
      class="flex flex-col items-center w-screen h-screen p-16 text-center bg-white shadow-2xl md:rounded-modal md:w-auto md:h-auto"
      :class="
        animateModalUpDown
          ? 'animate__animated animate__slideInUp animate__faster'
          : 'animate__animated animate__slideOutDown animate__faster'
      "
    >
      <icon icon="email-sent" class="w-full h-64 mt-4" />
      <h2
        class="mt-10 text-5xl leading-tight md:mt-20 font-heading text-h2-fluid"
      >
        Message delivered to a human
      </h2>
      <p class="mt-5 text-xl leading-tight md:whitespace-no-wrap">
        One of our team members will respond to you shortly.
      </p>
      <Btn class="mt-5" @click="close">
        Awesome!
      </Btn>
    </div>
  </div>
</template>

<script>
import { computed, watch, ref } from "vue";

export default {
  name: "MailSent",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const showModal = ref(false);
    const animateModalUpDown = ref(true);

    const close = () => {
      animateModalUpDown.value = false;
      setTimeout(() => {
        emit("close");
        showModal.value = false;
      }, 600);
    };

    watch(
      () => props.show,
      (shouldShow) => {
        showModal.value = shouldShow;
        animateModalUpDown.value = shouldShow;
      },
    );

    return {
      showModal,
      animateModalUpDown,
      close,
    };
  },
};
</script>
