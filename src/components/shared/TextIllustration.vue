<template>
  <div :id="id" class="grid gap-24 auto-grid">
    <div class="relative auto-right">
      <img :src="imgSrc" class="w-full h-auto" />
      <blob v-if="blobs" icon="rounded-blue" position="-282:0:64:78" right />
      <blob v-if="blobs" icon="u-cream" position="-124:463:51:42" right />
    </div>
    <div class="relative auto-left">
      <oh2>
        {{ title }}
      </oh2>
      <div class="mt-6">
        <slot />
      </div>
      <blob v-if="blobs" icon="u-blue" position="-283:-45:31:31" />
      <blob v-if="blobs" icon="rounded-cream" position="-121:331:59:52" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TextIllustration",
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    blobs: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `/central/illustrations/${this.img}`;
    },
  },
};
</script>
