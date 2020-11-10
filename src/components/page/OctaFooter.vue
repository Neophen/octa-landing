<template>
  <div class="grid grid-cols-2 gap-12 md:grid-cols-4" v-bind="$attrs">
    <div class="space-y-3 md:col-span-2">
      <h3 class="font-bold leading-tight">Contact us</h3>
      <p class="leading-tight">Octafest, UAB</p>
      <p class="leading-tight">Reg №: 231321421412</p>
      <p class="leading-tight">A.Jakšto g.9, 346</p>
      <p class="leading-tight">Vilnius, Lithuania</p>
      <a class="block leading-tight underline" href="mailto:hello@octafest.com">
        hello@octafest.com
      </a>
      <a class="block leading-tight underline" href="tel:+370 608 96 491">
        +370 608 96 491
      </a>
    </div>
    <div class="space-y-3">
      <h3 class="font-bold leading-tight">Product</h3>
      <div class="flex flex-col space-y-3">
        <a
          href="/tools"
          class="block leading-tight hover:underline"
          :class="{ active: isActive(routes.to) }"
        >
          Management tools
        </a>
        <!-- <a class="leading-tight">Website tools</a>
        <a class="leading-tight">Support</a>
        <a class="leading-tight">Pricing</a>
        <a class="leading-tight">Privacy policy</a>
        <a class="leading-tight">Security</a> -->
      </div>
    </div>
    <div class="space-y-3">
      <h3 class="font-bold leading-tight">Community</h3>
      <a href="/emerging" class="block leading-tight hover:underline">
        Emerging festival program
      </a>
      <a href="/advisory-board" class="block leading-tight hover:underline">
        Advisory board
      </a>
      <!-- <a class="leading-tight">Help center</a> -->
      <a
        href="https://discord.gg/ne6rT6J"
        target="_blank"
        class="block leading-tight hover:underline"
      >
        Discord chat
      </a>
      <!-- <p class="leading-tight">Live status</p> -->
      <!-- <p class="leading-tight">Pricing</p> -->
      <!-- <p class="leading-tight">Feature request</p> -->
    </div>
  </div>
  <div class="mt-16 text-center">
    <div class="flex items-center justify-center space-x-5">
      <p>Cookie policy</p>
      <p>Newsletter management</p>
    </div>
    <p class="mt-5 text-sm">2020 All Rights Reserved, Octafest, UAB ©</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "OctaFooter",
  setup() {
    const routes = [{ to: "/tools", text: "ToolsSubpage" }];
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = (path) => path === activeRoute.value;
    return { isActive, routes };
  },
};
</script>
