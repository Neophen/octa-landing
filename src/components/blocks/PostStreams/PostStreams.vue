<template>
  <TextIllustration :id="id" :title="title" img="octafest-posts.jpg" rounded>
    <div>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Categories &amp; threads
      </p>
      <p class="mt-2 text-lg leading-normal">
        Create categories for your posts: articles, interviews &amp; news so
        your visitors would find what interests them.
      </p>
      <p class="mt-6 text-lg leading-normal">
        Additionally, use threads like “News from Cannes”, “Arthouse lovers” to
        make it easier to follow topics.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        User-focused streams
      </p>
      <p class="mt-2 text-lg leading-normal">
        Create user-specific streams of information. Stream on the main page is
        focused on your attendees, press page is ideal for press-releases - you
        get the point.
      </p>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "PostStreams",
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
