<template>
  <div id="editions">
    <div class="grid gap-24 mx-auto mt-40 auto-grid">
      <div class="auto-right">
        <div
          @click="showImage = true"
          class="relative grid w-full h-auto cursor-pointer sub-video md:hidden"
          style="border-radius: 20px;"
        >
          <img
            src="/central/octafest-edition-manager-gif.gif"
            class="w-full h-auto shadow-md vid"
            style="border-radius: 20px;"
          />
          <div
            class="absolute flex items-center self-center px-3 py-1 bg-white rounded-full cursor-pointer fullscreen"
            style="justify-self: center;"
          >
            <img src="/central/fullscreen.svg" class="mr-2" />
            <p class="text-lg">Click to view full screen</p>
          </div>
        </div>
        <div
          @click="showImage = true"
          class="relative hidden w-full h-auto cursor-pointer md:grid sub-video"
          style="border-radius: 20px;"
        >
          <video
            class="w-full h-auto shadow-md vid"
            style="border-radius: 20px;"
            autoplay
            loop
            muted
          >
            <source
              src="/central/octafest-edition-manager-lowres.mp4"
              type="video/mp4"
            />
          </video>
          <div
            class="absolute flex items-center self-center px-3 py-1 bg-white rounded-full cursor-pointer fullscreen"
            style="justify-self: center;"
          >
            <img src="/central/fullscreen.svg" class="mr-2" />
            <p class="text-lg">Click to view full screen</p>
          </div>
        </div>

        <p class="mt-4 text-center">Click on video to open in full screen</p>
        <div
          v-if="showImage"
          class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full"
          id="fullImg"
          tabindex="-1"
        >
          <div
            @click="showImage = false"
            class="fixed top-0 left-0 z-10 w-full h-full"
            style="background-color: rgba(0, 0, 0, 0.6);"
          ></div>
          <div
            class="z-20 modal-content"
            style="width: 75%; animation-name: zoom; animation-duration: 0.6s;"
          >
            <div class="flex mb-4 flex-end" @click="showImage = false">
              <p class="flex-1"></p>
              <div
                class="relative flex items-center justify-center mr-3 bg-white rounded-full cursor-pointer"
                style="height: 40px; width: 40px;"
              >
                <p class="text-4xl text-black focus:outline-none">&times;</p>
              </div>
            </div>

            <div class="relative flex items-center justify-center modal-body">
              <video
                class="hidden h-auto max-w-full md:block focus:outline-none"
                style="border-radius: 20px;"
                controls
                autoplay
                loop
                muted
              >
                <source
                  src="/central/octafest-edition-manager-highres.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                class="block h-auto max-w-full md:hidden focus:outline-none"
                style="border-radius: 20px;"
                controls
                loop
                muted
              >
                <source
                  src="/central/octafest-edition-manager-highres.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="auto-left">
        <h2 class="text-4xl leading-tight text-gray-600 font-heading">
          2. Editions &amp; archive manager
        </h2>
        <p class="mt-6 text-lg leading-normal">
          Running a film festival is hard. Doing it without festival specific
          tools 😱... is insanely hard.
        </p>
        <p class="mt-6 text-lg leading-normal">
          We dedicated our time to create tools specifically for film festials,
          so you could enjoy your creative freedom! 👉
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editions",
  setup() {
    let showImage = false;

    return {
      showImage,
    };
  },
};
</script>
