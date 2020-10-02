<template>
  <div
    class="py-3 lg:hidden"
    :class="{
      'top-0 fixed flex items-center inset-y-0 h-nav w-full bg-white z-10 shadow-md': shouldStick,
      block: !shouldStick,
    }"
  >
    <div class="w-full px-4">
      <nav class="container flex items-center w-full m-auto">
        <div class="flex-1">
          <a
            href="/"
            class="flex items-center phone_navbar_logo"
            style="width: 109px"
          >
            <icon icon="site-logo" style="height: 30px; width: 109px" />
          </a>
        </div>
        <button type="button" @click="openNav">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.5C0 0.671573 0.671573 0 1.5 0H20.5C21.3284 0 22 0.671573 22 1.5C22 2.32843 21.3284 3 20.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8.83337C0 8.00495 0.671573 7.33337 1.5 7.33337H20.5C21.3284 7.33337 22 8.00495 22 8.83337C22 9.6618 21.3284 10.3334 20.5 10.3334H1.5C0.671573 10.3334 0 9.6618 0 8.83337Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16.5C0 15.6716 0.671573 15 1.5 15H20.5C21.3284 15 22 15.6716 22 16.5C22 17.3284 21.3284 18 20.5 18H1.5C0.671573 18 0 17.3284 0 16.5Z"
              fill="black"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>
  <SideNav @close="showNav = false" :showNav="showNav" />
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import SideNav from "./SideNav.vue";

export default {
  name: "MobileHeader",
  components: {
    SideNav,
  },
  setup() {
    const shouldStick = ref(false);
    const showNav = ref(false);

    const updateSticky = (e) => {
      if (window.scrollY > 0) {
        shouldStick.value = true;
      } else {
        shouldStick.value = false;
      }
    };

    const openNav = () => {
      showNav.value = true;
    };

    onMounted(() => {
      window.addEventListener("scroll", updateSticky, true);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", updateSticky);
    });

    return {
      shouldStick,
      showNav,
      openNav,
    };
  },
};
</script>
