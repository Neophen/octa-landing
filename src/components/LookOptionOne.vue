<template>
  <div class="mt-40">
    <div class="grid">
      <h3 class="absolute font-display text-2xl text-bold">Option 1</h3>
      <div class="mb-5 mt-3">
        <icon class icon="highlight" style="width: 129px; height: 20px" />
      </div>
      <h2
        class="text-5xl mb-6 leading-tight text-gray-600 font-display text-h2-fluid"
        style="text-size-adjust:none;"
      >Create a distinct look using a community theme</h2>
      <div class="grid grid-auto-rows-209 grid-auto-cols-280 gap-4">
        <div
          class="relative block p-3 rounded group bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <icon icon="structure" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
          </div>
          <h3
            class="relative mt-3 ml-5 text-lg font-bold mb-2"
            style="font-family: Merriweather;"
          >Structure &amp; Layout</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Create pages, add &amp; arrange information the way you like.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <icon icon="heart" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
          </div>
          <h3
            class="relative mt-3 ml-5 text-lg font-bold mb-2"
            style="font-family: Merriweather;"
          >Logo</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >We are a whitelabel, just brand it with your logo.</p>
        </div>
        <div
          class="relative block p-3 group bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <icon icon="font" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
          </div>
          <h3
            class="relative mt-3 ml-5 text-lg font-bold mb-2"
            style="font-family: Merriweather;"
          >Fonts</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Change fonts all over the website.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <icon icon="colors" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Colors</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Use your brand colors for better recognition.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <icon icon="star" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Icons</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Have an icon style? Replace default icons anytime.</p>
        </div>
        <div
          class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
          style="border-radius: 20px;"
        >
          <div class="fill-current">
            <icon icon="camera" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
          </div>
          <h3
            class="relative mt-3 mb-2 ml-5 text-lg font-bold"
            style="font-family: Merriweather;"
          >Photos &amp; Videos</h3>
          <p
            class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
          >Share the festival experience through photos &amp; videos.</p>
        </div>
        <div class="relative">
          <div class="absolute group card w-full h-full" style="min-width: 240px;">
            <div class="three-card absolute h-full w-full" style="border-radius: 20px; "></div>
            <div
              class="three-card absolute h-full bg-teal-shadow"
              style="border-radius: 20px; width: 90%;"
            ></div>

            <a
              href="#book-a-demo"
              class="absolute three-card-main block p-3 rounded bg-cream-500 text-default h-full"
              style="border-radius: 20px; width: 78%;"
            >
              <div class="fill-current">
                <icon icon="eye" class="mt-5 ml-5" style="width: 50px; height: 50px;" />
              </div>
              <h3
                class="relative mt-3 mb-2 ml-5 text-lg font-bold"
                style="font-family: Merriweather;"
              >Signup for demo</h3>
              <div class="flex items-center">
                <p
                  class="relative pb-0 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
                >Signup</p>
                <icon
                  class="fill-current text-grey-500 group-hover:text-black"
                  icon="link"
                  style="width: 24px; height: 24px;"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Btn from "./Btn.vue";

export default {
  name: "LookOptionOne",
  components: {
    Icon,
    Btn,
  },
};
</script>
