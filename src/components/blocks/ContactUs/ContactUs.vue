<template>
  <div id="book-a-demo">
    <div class="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2">
      <img
        src="/central/contact-us.svg"
        class="md:my-auto"
        style="width: 672px; max-height: 490px"
      />
      <div class="space-y-5" style="max-width: 490px">
        <h2
          class="text-4xl font-bold leading-tight text-gray-600 font-heading"
          style="text-size-adjust: none"
        >
          {{ title }}
        </h2>
        <op
          >Join our
          <a href="https://discord.gg/ne6rT6J" target="blank_" class="underline"
            >community chat💖</a
          >
          where film festival organizers share their experiences. Octafest team
          members will answer your questions and share demo access.<br /><br />Alternatively,
          you can send us an email:</op
        >
        <form @submit.prevent="onSubmit">
          <label class="block">
            <span class="mb-2 ml-3 text-sm text-gray-500 font-text"
              >Full name</span
            >
            <input
              v-model="full_name"
              name="full_name"
              type="text"
              placeholder="Your name..."
              required
              class="block w-full px-4 py-2 mt-1 border border-gray-400 shadow-none md:w-1/2 rounded-large form-input"
            />
          </label>
          <label class="block">
            <span class="mb-2 ml-3 text-sm text-gray-500 font-text"
              >Work e-mail</span
            >
            <input
              type="email"
              name="email"
              v-model="email"
              class="block w-full px-4 py-2 mt-1 border border-gray-400 shadow-none md:w-1/2 rounded-large form-input"
              placeholder="Your email address..."
              required
            />
          </label>

          <label class="block">
            <span class="mb-2 ml-3 text-sm text-gray-500 font-text"
              >Message</span
            >
            <textarea
              name="message"
              v-model="message"
              class="block w-full px-4 py-2 mt-1 border border-gray-400 shadow-none resize-none rounded-large form-textarea"
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
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { reactive, toRefs, ref, watch, computed } from "vue";

import MailSent from "./MailSent.vue";

export default {
  name: "ContactUs",
  props: {
    title: {
      type: String,
      default: "Book a demo",
    },
  },
  components: {
    MailSent,
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

    const onSubmit = async (e) => {
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
