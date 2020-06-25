<template>
  <div>
    <button
      class="focus:outline-none flex items-center ml-5"
      @click="toggleDetails"
    >
      <span
        :class="{'text-primary-700':detail.isOpen}"
        class="flex items-center text-2xl font-display text-gray-600 nav_mobile_title focus:text-primary-700 hover:text-primary-700"
      >
        {{ detail.title }}
        <icon
          icon="arrow"
          class="ml-2 arrow"
          style="width: 5px; height: 19px;"
          :style="detail.isOpen ? 'transform: rotate(90deg)' :''"
        />
      </span>
    </button>

    <ul v-if="detail.isOpen" class="flex flex-col p-0 m-0">
      <div v-for="link in detail.links">
        <div
          v-if="link.normal"
          class="flex ml-5 hover:text-primary-700 items-center mb-2"
          style="width: 10px;"
        >
          <p>•</p>
          <a
            :key="link.id"
            :href="link.url"
            @click="closeNav"
            class="ml-1 text-lg underline whitespace-no-wrap"
          >{{ link.title }}</a>
        </div>
        <div v-else-if="link.contact_link">
          <div class="flex ml-5 hover:text-primary-700 items-center mb-2" style="width: 10px;">
            <a
              :key="link.id"
              :href="link.url"
              @click="closeNav"
              class="ml-1 text-lg underline whitespace-no-wrap"
            >{{ link.title }}</a>
          </div>
          <div v-if="link.icons" class="flex ml-5 mt-8 whitespace-no-wrap">
            <a href="#" class="mr-3">
              <img src="/central/linkedin_sidenav.svg" alt="linkedin" />
            </a>
            <a href="#" class="mr-3">
              <img src="/central/facebook_sidenav.svg" alt="facebook" />
            </a>
            <a href="#" class="mr-3">
              <img src="/central/instagram_sidenav.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="/central/twitter_sidenav.svg" alt="twitter" />
            </a>
          </div>
        </div>
        <div v-else class="flex ml-5 items-center mb-2">
          <p :key="link.id" class="ml-1 text-lg">{{ link.title }}</p>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import Icon from "./Icon.vue";
export default {
  name: "DetailsDropdown",
  components: {
    Icon,
  },
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
