<template>
  <div class="mt-40">
    <div class="grid">
      <h3 class="text-3xl font-heading">Tools for film festivals of any size</h3>
      <div class="grid grid-auto-rows-209 grid-auto-cols-280 gap-4 mt-8">
        <div
          class="relative block p-3 rounded group bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/film.svg" class="mt-5 ml-5" alt="film" />
            <!-- <icon icon="structure" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 ml-5 text-lg font-bold mb-2"
            style="font-family: Merriweather;"
          >Films</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Add feature &amp; short films with an easy form.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/events2.svg" class="mt-5 ml-5" alt="events" />
            <!-- <icon icon="heart" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 ml-5 text-lg font-bold mb-2"
            style="font-family: Merriweather;"
          >Events</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Create workshops, Q&amp;As, panel discussions, and others.</p>
        </div>
        <div
          class="relative block p-3 group bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/bundles.svg" class="mt-5 ml-5" alt="bundles" />
            <!-- <icon icon="font" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 ml-5 text-lg font-bold mb-2"
            style="font-family: Merriweather;"
          >Bundles</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Combine screenings &amp; events. In any amount and order.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/sections.svg" class="mt-5 ml-5" alt="sections" />
            <!-- <icon icon="colors" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Sections</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Add feature &amp; short films with an easy form.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/sponsor.svg" class="mt-5 ml-5" alt="sponsor" />
            <!-- <icon icon="star" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Sponsors</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Weave them into films, events, or recommendations.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/recommendations.svg" class="mt-5 ml-5" alt="recommendations" />
            <!-- <icon icon="camera" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Recommendations</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Highlights for niche groups: Deep arthouse, Family, etc.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/schedule.svg" class="mt-5 ml-5" alt="schedule" />
            <!-- <icon icon="camera" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Schedule</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Pick location &amp; starting time, no worries about overlaps.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <img src="/central/location.svg" class="mt-5 ml-5" alt="location" />
            <!-- <icon icon="camera" class="mt-5 ml-5" style="width: 50px; height: 50px;" /> -->
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Cities &amp; venues</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Add any amount of festival locations.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon.vue";

export default {
  name: "ToolsForFilm",
  components: {
    Icon,
  },
};
</script>
