<template>
  <div id="book-a-demo" class="grid grid-cols-1 gap-24 pt-40 mx-auto md:grid-cols-2">
    <img src="/central/contact-us.svg" class="w-full h-auto md:-mx-12 md:-mt-2" />
    <div>
      <h2
        class="text-5xl font-bold leading-tight text-gray-600 font-display text-h2-fluid"
        style="text-size-adjust:none;"
      >Book a demo</h2>
      <form class="mt-5 space-y-5" @submit.prevent="onSubmit">
        <label class="block">
          <span class="mb-2 ml-3 text-sm text-gray-500 font-body">Full name</span>
          <input
            v-model="full_name"
            name="full_name"
            type="text"
            placeholder="Your name..."
            required
            class="block w-full px-4 py-2 mt-1 border border-gray-400 rounded-large form-input"
          />
        </label>
        <label class="block">
          <span class="mb-2 ml-3 text-sm text-gray-500 font-body">Work e-mail</span>
          <input
            type="email"
            name="email"
            v-model="email"
            class="block w-full px-4 py-2 mt-1 border border-gray-400 rounded-large form-input"
            placeholder="Your email address..."
            required
          />
        </label>

        <label class="block">
          <span class="mb-2 ml-3 text-sm text-gray-500 font-body">Message</span>
          <textarea
            name="message"
            v-model="message"
            class="block w-full px-4 py-2 mt-1 border border-gray-400 resize-none rounded-large form-textarea"
            rows="5"
            placeholder="Your message..."
            required
          ></textarea>
        </label>
        <input type="text" v-model="lastName" name="last name" hidden />
        <Btn tag="button" :disabled="isLoading">{{ submitText }}</Btn>
      </form>
    </div>
  </div>
  <MailSent :show="showSuccess" @close="showSuccess = false" />
</template>

<script>
import emailjs from "emailjs-com";
import { reactive, toRefs, ref, watch, computed } from "vue";

import MailSent from "./MailSent.vue";
import Btn from "./Btn.vue";

export default {
  name: "ContactUs",
  components: {
    MailSent,
    Btn,
  },
  setup() {
    const serviceId = "gmail";
    const templateId = "template_NeU45PnF";
    const userId = "user_vqKw49DpDe0uN4q56TVF2";

    const state = reactive({
      isLoading: false,
      email: "",
      full_name: "",
      message: "",
      lastName: "",
      showSuccess: false,
      submitText: computed(() => (state.isLoading ? "Sending..." : "Send")),
    });

    const showModal = () => {
      state.showSuccess = true;
    };

    const clearValues = () => {
      state.full_name = "";
      state.email = "";
      state.message = "";
      state.lastName = "";
    };

    const onSubmit = async e => {
      state.isLoading = true;
      if (state.lastName) {
        state.showSuccess = true;
        return;
      }
      try {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          e.target,
          userId,
        );

        if (result) {
          state.showSuccess = true;
          clearValues();
        }
      } catch (error) {
        console.log("FAILED...", error);
      } finally {
        state.isLoading = false;
      }
    };

    return {
      ...toRefs(state),
      onSubmit,
      showModal,
    };
  },
};
</script>
