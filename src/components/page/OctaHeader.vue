<template>
  <div
    id="nav"
    class="items-center hidden py-3 lg:block"
    :class="{
      'top-0 fixed inset-y-0 h-nav w-full bg-white z-10 shadow-md': shoulStick,
    }"
  >
    <div class="px-4">
      <nav class="container flex items-center w-full mx-auto">
        <a :href="logoLink" class="flex items-center">
          <icon icon="site-logo" style="height: 42px; width: 135px" />
          <icon icon="spacer" class="ml-3" style="height: 20px; width: 2px" />
        </a>
        <div class="flex items-center flex-1 space-x-3">
          <div
            v-if="links.length > 0"
            class="w-1 h-8 border-r border-gray-400"
          ></div>

          <a
            v-for="link in links"
            :key="link.url"
            :href="link.url"
            class="text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
            >{{ link.label }}</a
          >
        </div>
        <a
          class="block w-auto py-3 font-bold text-center text-white rounded-full cursor-pointer md:inline-block bg-primary-500 text-title hover:bg-primary-400 active:bg-primary-600 focus:outline-none focus:shadow-outline"
          style="width: 180px"
          href="#book-a-demo"
          >Book a demo</a
        >
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "OctaHeader",
  props: {
    logoLink: {
      type: String,
      default: "/",
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const shoulStick = ref(false);

    const updateSticky = (e) => {
      if (window.scrollY > 0) {
        shoulStick.value = true;
      } else {
        shoulStick.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", updateSticky);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", updateSticky);
    });

    return {
      shoulStick,
    };
  },
};
</script>
