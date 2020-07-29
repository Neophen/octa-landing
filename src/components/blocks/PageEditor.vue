<template>
<span id="page-editor" class="block h-20 invisible"></span>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        @click="showImage = true"
        class="w-full relative cursor-pointer sub-video h-auto md:hidden grid"
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
        @click="showImage = true"
        class="md:grid relative hidden cursor-pointer sub-video w-full h-auto"
        style="border-radius: 20px;"
      >
        <video class="w-full vid h-auto shadow-md" style="border-radius: 20px;" autoplay loop muted>
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
      <p class="text-center mt-4">Click on video to open in full screen</p>
      <div
        v-if="showImage"
        class="fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center"
        id="fullImg"
        tabindex="-1"
      >
        <div
          @click="showImage = false"
          class="fixed top-0 left-0 z-10 w-full h-full"
          style="background-color: rgba(0, 0, 0, .6);"
        ></div>
        <div
          class="modal-content z-20"
          style="width: 75%;
    animation-name: zoom;
    animation-duration: 0.6s;"
        >
          <div class="flex flex-end mb-4" @click="showImage = false">
            <p class="flex-1"></p>
            <div
              class="cursor-pointer relative bg-white rounded-full flex items-center justify-center mr-3"
              style="height: 40px; width: 40px"
            >
              <p class="text-4xl text-black focus:outline-none">&times;</p>
            </div>
          </div>

          <div class="modal-body relative flex justify-center items-center">
            <video
              class="max-w-full h-auto md:hidden block focus:outline-none"
              style="border-radius: 20px;"
              controls
              loop
              muted
            >
              <source src="/central/octafest-page-editor-highres-fast.mp4" type="video/mp4" />
            </video>
            <video
              class="max-w-full h-auto md:block hidden focus:outline-none"
              style="border-radius: 20px;"
              controls
              autoplay
              loop
              muted
            >
              <source src="/central/octafest-page-editor-highres-fast.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="auto-left">
      <h2 class="text-4xl leading-tight text-gray-600 font-heading">1. Page editor</h2>
      <p class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading">Flexible</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Drag &amp; drop what you need you are ready to go live, no complicated settings.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >Visual &amp; easy</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Drag &amp; drop what you need you are ready to go live, no complicated settings.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
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
  setup() {
    let showImage = false;

    return {
      showImage,
    };
  },
};
</script>
