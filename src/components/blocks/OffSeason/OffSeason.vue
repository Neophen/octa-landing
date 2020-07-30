<template>
  <TextIllustration
    :id="id"
    :title="title"
    img="octafest-off-season-schedule.jpg"
    rounded
  >
    <div>
      <op class="mt-6">
        Stay active throughout the year. Use time between editions to strengthen
        your brand and build a stronger community.
      </op>
      <oph class="mt-6">
        Off-season screenings &amp; events
      </oph>
      <op class="mt-2">
        Use a lightweight schedule for any screenings &amp; events outside of
        your edition dates. Easy.
      </op>
      <oph class="mt-6">
        Film distribution
      </oph>
      <op class="mt-2">
        Own rights to some of the films? List these films, so people could watch
        them on VOD platforms or in private screenings.
      </op>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "OffSeason",
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
