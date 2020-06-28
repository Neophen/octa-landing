<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        class="w-full relative cursor-pointer sub-video h-auto grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-off-season-schedule-small.jpg"
          class="w-full vid h-auto shadow-md"
          style="border-radius: 20px;"
        />
        <div
          class="absolute flex fullscreen cursor-pointer bg-white rounded-full px-3 py-1 self-center items-center"
          style="justify-self: center;"
        >
          <img src="/central/fullscreen.svg" class="mr-2" />
          <p class="text-lg">Click to view full screen</p>
        </div>
      </div>
      <p class="text-center mt-4">Click on image to open in full screen</p>
    </div>
    <div class="auto-left">
      <h2 class="text-4xl leading-tight text-gray-600 font-display">4. Off-season tools</h2>
      <p
        class="mt-6 text-lg leading-normal"
      >Stay active throughout the year. Use time between editions to strengthen your brand and build a stronger community.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Off-season screenings &amp; events</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Use a lightweight schedule for any screenings &amp; events outside of your edition dates. Easy.</p>
      <p
        class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display"
      >Film distribution</p>
      <p
        class="mt-2 text-lg leading-normal"
      >Own rights to some of the films? List these films, so people could watch them on VOD platforms or in private screenings.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffSeason",
};
</script>
