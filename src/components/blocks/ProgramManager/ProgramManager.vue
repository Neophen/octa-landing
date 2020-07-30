<template>
  <span id="program-manager" class="block h-20 invisible"></span>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        @click="showImage = true"
        class="w-full relative cursor-pointer sub-video h-auto grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-competitive-program-small.jpg"
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
      <h2 class="text-4xl leading-tight text-gray-600 font-heading">3. Competitive program manager</h2>
      <p class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading">A perfect flow</p>
      <ul class="list-decimal ml-4 mt-2 text-lg">
        <li>Create an open call. Enable your submission form with a single click.</li>
        <li>Invite jury members.</li>
        <li>Review your submissions. Reject or approve applications with a simple drag &amp; drop.</li>
        <li>Move competing films into your program.</li>
        <li>Review &amp; vote. Use internal review &amp; voting or invite your community to participate.</li>
        <li>Publish award winners.</li>
      </ul>
    </div>
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
          <img
            class="modal-img max-w-full h-auto"
            style="border-radius: 20px;"
            src="/central/octafest-competitive-program-large.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramManager",

  setup() {
    let showImage = false;

    return {
      showImage,
    };
  },
};
</script>
