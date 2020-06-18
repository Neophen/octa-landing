<template>
  <div
    id="nav"
    class="py-3 items-center hidden md:block"
    :class="{
    'top-0 sticky inset-y-0 bg-white z-10 shadow-md': shoulStick
  }"
  >
    <nav class="container items-center m-auto flex items-center w-full">
      <a href="#" class="flex items-center">
        <icon icon="site-logo" style="height: 42px; width: 135px" />
        <icon icon="spacer" style="height: 20px; width: 2px;" />
      </a>
      <div class="flex-1">
        <ul class="p-0 m-0">
          <a
            href="#theGist"
            class="ml-3 text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
          >The gist</a>
          <a
            href="#overview"
            class="ml-3 text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
          >Cases</a>
          <a
            href="#overview"
            class="ml-3 text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
          >Tools</a>
          <a
            href="#overview"
            class="ml-3 text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
          >Look</a>
          <a
            href="#overview"
            class="ml-3 text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
          >Support</a>
          <a
            href="#overview"
            class="ml-3 text-base leading-tight text-black hover:text-teal-500 focus:text-teal-500"
          >Integrations</a>
        </ul>
      </div>
      <a
        class="block w-auto py-3 font-bold text-center text-white rounded-full cursor-pointer md:inline-block bg-primary-500 text-title hover:bg-primary-400 active:bg-primary-600 focus:outline-none focus:shadow-outline"
        style="width: 180px;"
        href="#book-a-demo"
      >Book a demo</a>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Icon from "./Icon.vue";
export default {
  name: "OctaHeader",
  components: {
    Icon,
  },
  setup() {
    const shoulStick = ref(false);

    const updateSticky = e => {
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
