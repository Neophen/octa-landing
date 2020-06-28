<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        class="w-full relative cursor-pointer sub-video h-auto sm:hidden grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-page-editor-gif-opt.gif"
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
          <source src="/central/octafest-page-editor-lower-fast.mp4" type="video/mp4" />
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
      <h2 class="text-4xl leading-tight text-gray-600 font-display">1. Page editor</h2>
      <p class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display">Flexible</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Drag &amp; drop what you need you are ready to go live, no complicated settings.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Visual &amp; easy</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Drag &amp; drop what you need you are ready to go live, no complicated settings.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Synced with your tools</p>
      <p class="mt-2 text-lg leading-normal">
        Drag &amp; drop what you need you are ready to go live, no complicated settings.Automated blocks like schedule, program &amp; posts are fun. Drop them onto the page, and then just forget about them.
        They will become visible when needed and auto-update when you provide new information. 👌
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageEditor",
};
</script>
