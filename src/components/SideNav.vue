<template>
  <div>
    <div
      id="sidenav-overlay-btn"
      class="absolute inset-0 w-full h-full bg-gray-500 opacity-75 z-0 hidden"
      @click="closeNav"
      :style="navMobile"
    ></div>
    <div
      id="Sidenav"
      class="h-full fixed z-20 top-0 bg-white overflow-x-hidden duration-500 right-0 w-0 duration-500"
      :style="sliderStyles"
    >
      <div class="flex items-center">
        <icon icon="site-logo" />
        <button @click="closeNav" class="text-4xl mr-5 ml-auto">&times;</button>
      </div>
      <div class="flex flex-col my-nav">
        <DetailsDropdown
          v-for="detail in details"
          :key="detail.id"
          :detail="detail"
          @close="closeNav"
          @open="openDetails(detail.id)"
        />
      </div>
      <hr class="mx-5 absolute nav_mobile_hr" />
      <div class="mx-5 signup_button_mobile absolute">
        <a href="#form" @click="closeNav" class="signup_button w-full">Signup for demo</a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";
import { computed, watch, onBeforeUnmount, reactive, toRefs } from "vue";
import DetailsDropdown from "./DetailsDropdown.vue";

export default {
  name: "SideNav",
  components: {
    Icon,
    Btn,
    DetailsDropdown,
  },
  props: {
    showNav: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      details: [
        {
          id: 0,
          title: "Features",
          isOpen: true,
          links: [
            {
              id: 0,
              title: "The gist",
              url: "#the-gist",
            },
            {
              id: 1,
              title: "The gist",
              url: "#the-gist",
            },
          ],
        },
        {
          id: 1,
          title: "Help center",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "Help",
              url: "#help",
            },
            {
              id: 1,
              title: "Me",
              url: "#me",
            },
          ],
        },
        {
          id: 2,
          title: "Contact us",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "Phone",
              url: "#phone",
            },
          ],
        },
      ],
    });

    const closeNav = () => {
      console.log("closing");
      emit("close");
    };

    const openDetails = id => {
      state.details = state.details.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isOpen: true,
          };
        }

        return {
          ...item,
          isOpen: false,
        };
      });
    };

    const sliderStyles = computed(() => {
      if (props.showNav) {
        return {
          width: "315px",
        };
      }

      return {
        width: "0",
      };
    });

    const navMobile = computed(() => {
      if (props.showNav) {
        return {
          "z-index": 20,
          display: "block",
        };
      }
      return {
        "z-index": 0,
        display: "none",
      };
    });

    const escapeHandler = event => {
      if (event.key === "Escape") {
        emit("close");
      }
    };

    const disableScroll = () => {
      const scrollY = document.body.style.top;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      window.addEventListener("keydown", escapeHandler, true);
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    };

    const enableScroll = () => {
      const scrollY = document.body.style.top;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.body.style.top = `-${window.scrollY}px`;
      window.removeEventListener("keydown", escapeHandler, true);
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };

    watch(
      () => props.showNav,
      open => {
        open ? disableScroll() : enableScroll();
      },
      { immediate: true },
    );

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", escapeHandler, true);
    });

    return {
      ...toRefs(state),
      closeNav,
      sliderStyles,
      navMobile,
      openDetails,
    };
  },
};
</script>
