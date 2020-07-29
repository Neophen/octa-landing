<template>
  <div>
    <button
      class="flex items-center ml-5 focus:outline-none"
      @click="toggleDetails"
    >
      <span
        :class="{ 'text-primary-700': detail.isOpen }"
        class="flex items-center text-2xl text-gray-600 font-heading nav_mobile_title focus:text-primary-700 hover:text-primary-700"
      >
        {{ detail.title }}
        <icon
          icon="arrow"
          class="ml-2 duration-100 arrow"
          style="width: 5px; height: 19px;"
          :style="detail.isOpen ? 'transform: rotate(90deg)' : ''"
        />
      </span>
    </button>

    <ul v-if="detail.isOpen" class="flex flex-col p-0 m-0">
      <div v-for="link in detail.links">
        <div
          v-if="link.normal"
          class="flex items-center mb-2 ml-5 hover:text-primary-700"
          style="width: 10px;"
        >
          <p>•</p>
          <a
            :key="link.id"
            :href="link.url"
            @click="closeNav"
            class="ml-1 text-lg underline whitespace-no-wrap"
            >{{ link.title }}</a
          >
        </div>
        <div v-else-if="link.contact_link">
          <div
            class="flex items-center mb-2 ml-5 hover:text-primary-700"
            style="width: 10px;"
          >
            <a
              :key="link.id"
              :href="link.url"
              @click="closeNav"
              class="ml-1 text-lg underline whitespace-no-wrap"
              >{{ link.title }}</a
            >
          </div>
          <div v-if="link.icons" class="flex mt-8 ml-5 whitespace-no-wrap">
            <a
              href="https://www.linkedin.com/company/octafest"
              target="_blank"
              class="mr-3"
            >
              <img src="/central/linkedin_sidenav.svg" alt="linkedin" />
            </a>
            <a
              href="https://www.facebook.com/octafestplatform"
              target="_blank"
              class="mr-3"
            >
              <img src="/central/facebook_sidenav.svg" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/octafest"
              target="_blank"
              class="mr-3"
            >
              <img src="/central/instagram_sidenav.svg" alt="instagram" />
            </a>
            <a href="https://twitter.com/Octafest1" target="_blank">
              <img src="/central/twitter_sidenav.svg" alt="twitter" />
            </a>
          </div>
        </div>
        <div v-else class="flex items-center mb-2 ml-5">
          <p :key="link.id" class="ml-1 text-lg">{{ link.title }}</p>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "DetailsDropdown",
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const closeNav = () => {
      emit("close");
    };

    const toggleDetails = () => {
      emit("toggle");
    };

    return {
      closeNav,
      toggleDetails,
    };
  },
};
</script>
