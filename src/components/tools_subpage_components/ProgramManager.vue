<template>
  <div class="grid gap-24 mx-auto auto-grid mt-40">
    <div class="auto-right">
      <div
        class="w-full relative cursor-pointer sub-video h-auto grid"
        style="border-radius: 20px;"
      >
        <img
          src="/central/octafest-competitive-program-small.jpg"
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
      <h2 class="text-4xl leading-tight text-gray-600 font-display">3. Competitive program manager</h2>
      <p class="mt-6 text-lg font-semibold leading-normal text-gray-600 font-display">A perfect flow</p>
      <ul class="list-decimal ml-4 mt-2 text-lg">
        <li>Create an open call. Enable your submission form with a single click.</li>
        <li>Invite jury members.</li>
        <li>Review your submissions. Reject or approve applications with a simple drag &amp; drop.</li>
        <li>Move competing films into your program.</li>
        <li>Review &amp; vote. Use internal review &amp; voting or invite your community to participate.</li>
        <li>Publish award winners.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramManager",
};
</script>
