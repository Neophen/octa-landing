<template>
  <teleport to="#modals">
    <div class="fixed inset-0 z-20 flex items-center justify-center">
      <button
        @click="$emit('close')"
        class="absolute inset-0 w-full h-full"
        style="background-color: rgba(0, 0, 0, 0.6);"
      ></button>
      <div class="z-20 w-full md:w-4/5">
        <div class="flex justify-end w-full mb-4">
          <button
            @click="$emit('close')"
            class="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer focus:outline-none"
          >
            <p class="text-4xl text-black focus:outline-none">&times;</p>
          </button>
        </div>

        <div
          class="z-20 flex items-center justify-center overflow-hidden md:rounded-large"
        >
          <video
            controls
            width="1200"
            height="500"
            autoplay
            loop
            muted
            preload="auto"
            class="w-full h-full"
            :poster="poster"
          >
            <source
              media="(min-width:650px)"
              :src="videoHigh"
              type="video/mp4"
            />
            <source
              media="(max-width:649px)"
              :src="videoHighMobile"
              type="video/mp4"
            />
            <p>
              Your browser doesn't support HTML video. Here is a
              <a :href="videoHigh">link to the video</a> instead.
            </p>
          </video>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "VideoModal",
  props: {
    video: {
      type: String,
      required: true,
    },
  },
  computed: {
    poster() {
      return `/central/videos/${this.video}.gif`;
    },
    videoHigh() {
      return `/central/videos/${this.video}-high.mp4`;
    },
    videoHighMobile() {
      return `/central/videos/${this.video}-high-mob.mp4`;
    },
  },
};
</script>
