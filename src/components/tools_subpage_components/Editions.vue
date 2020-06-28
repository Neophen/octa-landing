<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        class="w-full relative cursor-pointer sub-video h-auto sm:hidden grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-edition-manager-gif.gif"
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
      <div
        class="sm:grid relative hidden cursor-pointer sub-video w-full h-auto"
        style="border-radius: 20px;"
      >
        <video
          class=" w-full vid h-auto shadow-md"
          style="border-radius: 20px;"
          autoplay
          loop
          muted
        >
          <source src="/central/octafest-edition-manager-lowres.mp4" type="video/mp4" />
        </video>
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
