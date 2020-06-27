<template>
  <div
    id="nav"
    class="items-center hidden py-3 md:block"
    :class="{
      'top-0 sticky inset-y-0 bg-white z-10 shadow-md': shoulStick,
    }"
  >
    <div class="px-4">
      <nav class="container flex items-center w-full m-auto">
        <div class="flex-1">
          <a href="/" class="flex items-center" style="width: 135px">
            <icon icon="site-logo" style="height: 42px; width: 135px;" />
          </a>
        </div>
        <a
          class="block w-auto py-3 font-bold text-center text-white rounded-full cursor-pointer md:inline-block bg-primary-500 text-title hover:bg-primary-400 active:bg-primary-600 focus:outline-none focus:shadow-outline"
          style="width: 180px;"
          href="#book-a-demo"
        >Book a demo</a>
      </nav>
    </div>
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
