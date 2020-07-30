<template>
  <TextIllustration
    :id="id"
    :title="title"
    img="octafest-competitive-program.jpg"
    rounded
  >
    <div>
      <oph class="mt-6">
        A perfect flow
      </oph>
      <ul class="mt-2 ml-4 text-lg list-decimal">
        <li>
          Create an open call. Enable your submission form with a single click.
        </li>
        <li>Invite jury members.</li>
        <li>
          Review your submissions. Reject or approve applications with a simple
          drag &amp; drop.
        </li>
        <li>Move competing films into your program.</li>
        <li>
          Review &amp; vote. Use internal review &amp; voting or invite your
          community to participate.
        </li>
        <li>Publish award winners.</li>
      </ul>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "ProgramManager",
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
