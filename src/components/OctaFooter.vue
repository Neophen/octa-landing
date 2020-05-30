<template>
  <div class="grid grid-cols-2 gap-12 md:grid-cols-4" v-bind="$attrs">
    <div class="space-y-3 md:col-span-2">
      <h3 class="font-bold leading-tight">Contact us</h3>
      <p class="leading-tight">Octafest, UAB</p>
      <p class="leading-tight">Reg №: 231321421412</p>
      <p class="leading-tight">A.Jakšto g.9, 346</p>
      <p class="leading-tight">Vilnius, Lithuania</p>
      <a class="block leading-tight underline" href="mailto:hello@octafest.com"
        >hello@octafest.com</a
      >
      <a class="block leading-tight underline" href="tel:+370 608 96 491"
        >+370 608 96 491</a
      >
    </div>
    <div class="space-y-3">
      <h3 class="font-bold leading-tight">Product</h3>
      <p class="leading-tight">Management tools</p>
      <p class="leading-tight">Website tools</p>
      <p class="leading-tight">Support</p>
      <p class="leading-tight">Pricing</p>
      <p class="leading-tight">Privacy policy</p>
      <p class="leading-tight">Security</p>
    </div>
    <div class="space-y-3">
      <h3 class="font-bold leading-tight">Community</h3>
      <p class="leading-tight">Help center</p>
      <p class="leading-tight">Discord chat</p>
      <p class="leading-tight">Live status</p>
      <p class="leading-tight">Pricing</p>
      <p class="leading-tight">Feature request</p>
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
export default {
  name: "OctaFooter",
};
</script>
