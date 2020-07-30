<template>
  <div>
    <button
      @click="showModal = true"
      class="relative overflow-hidden border border-transparent cursor-pointer rounded-large hover:border-primary-500 group focus:outline-none shadow-video hover:shadow-video-hover"
    >
      <video
        width="670"
        height="387"
        autoplay
        loop
        muted
        preload="auto"
        class="w-full h-full"
        :poster="poster"
      >
        <source media="(min-width:650px)" :src="videoLow" type="video/mp4" />
        <source
          media="(max-width:649px)"
          :src="videoLowMobile"
          type="video/mp4"
        />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a :href="videoHigh">link to the video</a> instead.
        </p>
      </video>
      <div
        class="absolute inset-0 items-center justify-center hidden group-hover:flex bg-img-overlay"
      >
        <div class="flex items-center px-3 py-1 bg-white rounded-full">
          <icon icon="fullscreen" class="w-4 h-4 mr-2" />
          <p class="text-lg">Click to view full screen</p>
        </div>
      </div>
    </button>
    <p class="mt-3 text-sm text-center">
      Click on video view full screen
    </p>
    <VideoModal v-if="showModal" @close="showModal = false" :video="video" />
  </div>
</template>

<script>
import VideoModal from "./VideoModal.vue";

export default {
  name: "OctaVideo",
  components: {
    VideoModal,
  },
  props: {
    video: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    showModal: false,
  }),
  computed: {
    poster() {
      return `/central/videos/${this.video}.gif`;
    },
    videoHigh() {
      return `/central/videos/${this.video}-high.mp4`;
    },
    videoLow() {
      return `/central/videos/${this.video}-low.mp4`;
    },
    videoLowMobile() {
      return `/central/videos/${this.video}-low-mob.mp4`;
    },
  },
};
</script>
