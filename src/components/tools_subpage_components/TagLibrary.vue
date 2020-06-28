<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        class="w-full relative cursor-pointer sub-video h-auto grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-tag-library-small.jpg"
          class="w-full vid h-auto shadow-md"
          style="border-radius: 20px;"
        />
        <div
          class="absolute flex fullscreen cursor-pointer bg-white rounded-full px-3 py-1 self-center items-center"
          style="justify-self: center;"
        >
          <img src="/central/fullscreen.svg" class="mr-2" />
          <p class="text-lg">Click to view full screen</p>
        </div>
      </div>
      <p class="text-center mt-4">Click on image to open in full screen</p>
    </div>
    <div class="auto-left">
      <h2 class="text-4xl leading-tight text-gray-600 font-display">8. Tag library</h2>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Manage with ease</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Create as many sponsors as you need, can’t get any simplier than drag &amp; drop.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Put your sponsors in the spotlight</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Having a sponsors page and a list in the bottom of the page is great. But let’s take one step ahead. Feature your most important sponsors direclty on the content - recommendations, film or event pages. Your sponsors will appreciate the attention.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagLibrary",
};
</script>
