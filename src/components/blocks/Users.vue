<template>
  <span id="users" class="block h-20 invisible"></span>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        @click="showImage = true"
        class="w-full relative cursor-pointer sub-video h-auto md:hidden grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-users-gif.gif"
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
          <source src="/central/octafest-users-lowres.mp4" type="video/mp4" />
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
          class="fixed top-0 left-0 z-10 w-full h-full overflow-auto overflow-auto img-full"
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
              class="max-w-full h-auto md:block hidden focus:outline-none"
              style="border-radius: 20px;"
              controls
              autoplay
              loop
              muted
            >
              <source src="/central/octafest-users-highres.mp4" type="video/mp4" />
            </video>
            <video
              class="max-w-full h-auto md:hidden block focus:outline-none"
              style="border-radius: 20px;"
              controls
              loop
              muted
            >
              <source src="/central/octafest-users-highres.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="auto-left">
      <h2 class="text-4xl leading-tight text-gray-600 font-heading">7. Users</h2>
      <p class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading">Easy access</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Send an invite and let people log in via Facebook, Google, or email. A person can add contact details and a photo so that your team could recognize one another.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >Information always up-to-date</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Tired of updating photos, emails, lists of team members, jury &amp; volunteers all over your website? We link all information. When users make changes it will be updated everywhere.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >Collaboration between all roles</p>
      <p
        class="mt-2 text-lg leading-normal"
      >You need a smooth information flow between your team, directors, volunteers, and other people involved. Everyone has access to the tools and information they need.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >Automated short-term access</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Need to issue short-term access for volunteers, jury members? Set expiry dates and access will be revoked automatically.</p>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
export default {
  name: "Users",
  setup() {
    let showImage = false;

    return {
      showImage,
    };
  },
};
</script>
