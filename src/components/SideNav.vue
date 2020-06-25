<template>
  <div>
    <div
      class="fixed inset-0 z-0 hidden w-full h-full bg-gray-500 opacity-75"
      @click="closeNav"
      :style="navMobile"
    ></div>
    <div
      class="fixed top-0 right-0 z-20 w-0 h-full overflow-x-hidden duration-500 bg-white"
      :style="sliderStyles"
    >
      <div class="flex items-center ml-5">
        <icon icon="site-logo" style="width: 100px; height: 30px;" />
        <button @click="closeNav" class="ml-auto mr-5 text-4xl focus:outline-none">&times;</button>
      </div>
      <hr style="border: 1px solid #bab9bb;" class="mx-5 mb-5" />
      <div class="flex flex-col my-nav">
        <DetailsDropdown
          v-for="detail in details"
          :key="detail.id"
          :detail="detail"
          @close="closeNav"
          @open="openDetails(detail.id)"
        />
      </div>
      <div
        class="absolute items-center justify-center flex flex-col"
        style="bottom: 40px; width: 315px"
      >
        <p
          class="text-lg mb-5 text-center"
          style="width: 265px"
        >Start managing your film festival the easy way</p>
        <a
          href="#book-a-demo"
          @click="closeNav"
          style="width: 275px"
          class="block py-3 font-bold text-center text-white rounded-full cursor-pointer md:inline-block bg-primary-500 text-title hover:bg-primary-400 active:bg-primary-600 focus:outline-none focus:shadow-outline"
        >Signup for demo</a>
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
          title: "Main",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "The gist",
              normal: true,
              url: "#the-gist",
            },
            {
              id: 1,
              title: "Looks",
              normal: true,
              url: "#look",
            },
            {
              id: 2,
              title: "Support",
              normal: true,
              url: "#support",
            },
            {
              id: 3,
              title: "Integrations",
              normal: true,
              url: "#integrations",
            },
          ],
        },
        {
          id: 1,
          title: "Product",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "Management tools",
              normal: true,
              url: "#help",
            },
            {
              id: 1,
              title: "Website looks",
              normal: true,
              url: "#me",
            },
            {
              id: 2,
              title: "Support",
              normal: true,
              url: "#me",
            },
            {
              id: 3,
              title: "Pricing",
              normal: true,
              url: "#me",
            },
            {
              id: 4,
              title: "Security",
              normal: true,
              url: "#me",
            },
          ],
        },
        {
          id: 2,
          title: "Community",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "Help center",
              normal: true,
              url: "#phone",
            },
            {
              id: 1,
              title: "Discord chat",
              normal: true,
              url: "#phone",
            },
            {
              id: 2,
              title: "Live status",
              normal: true,
              url: "#phone",
            },
            {
              id: 3,
              title: "Feature request",
              normal: true,
              url: "#phone",
            },
          ],
        },
        {
          id: 3,
          title: "Legal",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "Cookie policy",
              normal: true,
              url: "#phone",
            },
            {
              id: 1,
              title: "User agreement",
              normal: true,
              url: "#phone",
            },
            {
              id: 2,
              title: "Privacy policy",
              normal: true,
              url: "#phone",
            },
          ],
        },
        {
          id: 4,
          title: "Contact us",
          isOpen: false,
          links: [
            {
              id: 0,
              title: "Octafest, UAB",
              normal: false,
              url: "#phone",
            },
            {
              id: 0,
              title: "Reg №: 231321421412",
              normal: false,
              url: "#phone",
            },
            {
              id: 0,
              title: "A.Jakšto g.9, 346",
              normal: false,
              url: "#phone",
            },
            {
              id: 0,
              title: "Vilnius, Lithuania",
              normal: false,
              url: "#phone",
            },
            {
              id: 0,
              title: "hello@octafest.com",
              contact_link: true,
              url: "mailto:hello@octafest.com",
            },
            {
              id: 0,
              title: "+370 608 96 491",
              contact_link: true,
              icons: true,
              url: "tel:+370 608 96 491",
            },
          ],
        },
      ],
    });

    const closeNav = () => {
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
      window.addEventListener("keydown", escapeHandler, true);
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    };

    const enableScroll = () => {
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
