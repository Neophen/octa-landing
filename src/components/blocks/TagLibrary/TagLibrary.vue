<template>
  <TextIllustration
    :id="id"
    :title="title"
    img="octafest-tag-library.jpg"
    rounded
  >
    <div>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Manage with ease
      </p>
      <p class="mt-2 text-lg leading-normal">
        Create as many sponsors as you need, can’t get any simplier than drag
        &amp; drop.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Put your sponsors in the spotlight
      </p>
      <p class="mt-2 text-lg leading-normal">
        Having a sponsors page and a list in the bottom of the page is great.
        But let’s take one step ahead. Feature your most important sponsors
        direclty on the content - recommendations, film or event pages. Your
        sponsors will appreciate the attention.
      </p>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "TagLibrary",
  props: {
    link: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    title() {
      return `${this.index + 1}. ${this.link.title}`;
    },
    id() {
      return this.link.url.replace("#", "");
    },
  },
};
</script>
