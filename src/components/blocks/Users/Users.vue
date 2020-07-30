<template>
  <TextIllustration :id="id" :title="title">
    <template v-slot:image>
      <OctaVideo video="octafest-users" />
    </template>
    <div>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Easy access
      </p>
      <p class="mt-2 text-lg leading-normal">
        Send an invite and let people log in via Facebook, Google, or email. A
        person can add contact details and a photo so that your team could
        recognize one another.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Information always up-to-date
      </p>
      <p class="mt-2 text-lg leading-normal">
        Tired of updating photos, emails, lists of team members, jury &amp;
        volunteers all over your website? We link all information. When users
        make changes it will be updated everywhere.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Collaboration between all roles
      </p>
      <p class="mt-2 text-lg leading-normal">
        You need a smooth information flow between your team, directors,
        volunteers, and other people involved. Everyone has access to the tools
        and information they need.
      </p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-heading"
      >
        Automated short-term access
      </p>
      <p class="mt-2 text-lg leading-normal">
        Need to issue short-term access for volunteers, jury members? Set expiry
        dates and access will be revoked automatically.
      </p>
    </div>
  </TextIllustration>
</template>

<script>
export default {
  name: "Users",
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
