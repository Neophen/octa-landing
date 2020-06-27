<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right group">
      <img
        src="/central/octafest-edition-manager-gif.gif"
        class="block w-full h-auto sm:hidden shadow-md"
        style="border-radius: 20px;"
      />
      <video
        class="hidden w-full h-auto sm:block shadow-md group-hover:opacity-50 group-hover:bg-primary-img"
        style="border-radius: 20px;"
        autoplay
        loop
        muted
      >
        <source src="/central/octafest-edition-manager-lowres.mp4" type="video/mp4" />
      </video>
      <p class="text-center mt-4">Click on image to open in full screen</p>
    </div>
    <div class="auto-left">
      <h2
        class="text-4xl leading-tight text-gray-600 font-display"
      >2. Editions &amp; archive manager</h2>
      <p
        class="mt-6 text-lg leading-normal"
      >Running a film festival is hard. Doing it without festival specific tools 😱... is insanely hard.</p>
      <p
        class="mt-6 text-lg leading-normal"
      >We dedicated our time to create tools specifically for film festials, so you could enjoy your creative freedom! 👉</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editions",
};
</script>
