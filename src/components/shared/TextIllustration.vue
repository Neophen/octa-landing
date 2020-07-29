<template>
  <div :id="id" class="md:flex md:flex-row-reverse">
    <div class="relative flex-1 mb-12 md:mb-0 md:ml-24">
      <slot name="image">
        <img v-if="img" :src="imgSrc" class="w-full h-auto" />
      </slot>
      <blob v-if="blobs" icon="rounded-blue" position="-282:0:64:78" right />
      <blob v-if="blobs" icon="u-cream" position="-124:463:51:42" right />
    </div>
    <div class="relative flex-shrink-0" style="max-width: 490px;">
      <omark v-if="mark" class="mb-6">{{ mark }}</omark>
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
    mark: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
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
