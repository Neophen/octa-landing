<template>
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 w-screen h-screen overflow-auto bg-teal-100 bg-opacity-75"
  >
    <div class="flex items-center justify-center w-full h-full">
      <div
        class="flex flex-col items-center p-16 text-center bg-white shadow-2xl rounded-modal"
        :class="enterLeaveClass"
      >
        <icon icon="email-sent" class="max-w-sm mt-4" />
        <h2 class="mt-20 text-5xl leading-tight font-display text-h2-fluid">
          Message delivered to a human
        </h2>
        <p class="mt-5 text-xl leading-tight whitespace-no-wrap">
          One of our team members will respond to you shortly. In the meantime
          you can check out
          <a href="#use-cases" class="underline">use cases</a>.
        </p>
        <Btn class="mt-5" @click="close">
          Awesome!
        </Btn>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch, ref } from "vue";

import Icon from "./Icon.vue";
import Btn from "./Btn.vue";

export default {
  name: "MailSent",
  components: {
    Icon,
    Btn,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const showModal = ref(false);
    const enterClass = ref(true);
    const enterLeaveClass = computed(() =>
      enterClass.value
        ? "animate__animated animate__slideInUp"
        : "animate__animated animate__slideOutDown",
    );

    const close = () => {
      enterClass.value = false;
      setTimeout(() => {
        emit("close");
        showModal.value = false;
      }, 600);
    };

    watch(
      () => props.show,
      (shouldShow) => {
        showModal.value = shouldShow;
        enterClass.value = shouldShow;
      },
    );

    return {
      showModal,
      enterLeaveClass,
      close,
    };
  },
};
</script>
