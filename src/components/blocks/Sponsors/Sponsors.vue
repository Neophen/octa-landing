<template>
  <TextIllustration :id="id" :title="title">
    <template v-slot:image>
      <OctaVideo video="octafest-sponsors" />
    </template>
    <div>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Simply drag &amp; drop
      </p>
      <p class="mt-2 text-lg leading-normal">
        Easy and visual sponsor management.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Put your sponsors in the spotlight
      </p>
      <p class="mt-2 text-lg leading-normal">
        Your visitors don't look at endless lists of logos for fun. In Octafest,
        you can weave your partners into the content organically using sponsored
        recommendations, events, or films. Your sponsors will appreciate
        increased visibility.
      </p>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "Sponsors",
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
