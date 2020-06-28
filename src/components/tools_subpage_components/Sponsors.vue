<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        class="w-full relative cursor-pointer sub-video h-auto sm:hidden grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-sponsors-gif.gif"
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
          <source src="/central/octafest-sponsors-lowres.mp4" type="video/mp4" />
        </video>
        <div
          class="absolute flex fullscreen cursor-pointer bg-white rounded-full px-3 py-1 self-center items-center"
          style="justify-self: center;"
        >
          <img src="/central/fullscreen.svg" class="mr-2" />
          <p class="text-lg">Click to view full screen</p>
        </div>
      </div>
    </div>
    <div class="auto-left">
      <h2 class="text-4xl leading-tight text-gray-600 font-display">6. Sponsors</h2>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Simply drag &amp; drop</p>
      <p class="mt-2 text-lg leading-normal">Easy and visual sponsor management.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Put your sponsors in the spotlight</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Your visitors don't look at endless lists of logos for fun. In Octafest, you can weave your partners into the content organically using sponsored recommendations, events, or films. Your sponsors will appreciate increased visibility.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sponsors",
};
</script>
