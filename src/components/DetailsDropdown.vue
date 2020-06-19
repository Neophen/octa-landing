<template>
  <div>
    <details class="dropdown" :open="detail.isOpen">
      <summary id="featured" class="flex items-center ml-5">
        <button @click="openDetails">
          <span class="flex items-center nav_mobile_title">
            {{ detail.title }}
            <icon
              icon="arrow"
              class="ml-4 arrow"
              style="width= 11px; height=19px;"
            />
          </span>
        </button>
      </summary>
      <ul class="flex flex-col p-0 m-0">
        <a
          v-for="link in detail.links"
          :key="link.id"
          :href="link.url"
          @click="closeNav"
          class="ml-5 desktop_navbar_anchor"
          >{{ link.title }}</a
        >
      </ul>
    </details>
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

    const openDetails = () => {
      emit("open");
    };

    return {
      closeNav,
      openDetails,
    };
  },
};
</script>
