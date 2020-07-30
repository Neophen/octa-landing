<template>
  <TextIllustration :id="id" :title="title">
    <template v-slot:image>
      <OctaVideo video="octafest-page-editor" />
    </template>
    <div>
      <oph class="mt-6">
        Flexible
      </oph>
      <op class="mt-2">
        Drag &amp; drop what you need you are ready to go live, no complicated
        settings.
      </op>
      <oph class="mt-6">
        Visual &amp; easy
      </oph>
      <op class="mt-2">
        Drag &amp; drop what you need you are ready to go live, no complicated
        settings.
      </op>
      <oph class="mt-6">
        Synced with your tools
      </oph>
      <op class="mt-2">
        Drag &amp; drop what you need you are ready to go live, no complicated
        settings.Automated blocks like schedule, program &amp; posts are fun.
        Drop them onto the page, and then just forget about them. They will
        become visible when needed and auto-update when you provide new
        information. 👌
      </op>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "PageEditor",
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
