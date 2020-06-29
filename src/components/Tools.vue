<template>
  <span id="tools" class="invisible block h-20 -mt-20"></span>
  <div class="mt-40">
    <img src="/central/left.svg" class="absolute left-0 hidden 2xl:block" alt="left" />
    <img src="/central/right.svg" class="absolute right-0 hidden 2xl:block" alt="right" />
    <h2
      class="mb-6 text-4xl leading-tight text-center text-gray-600 font-display"
    >Program visually. Present on snazzy web &amp; mobile.</h2>
    <div class="relative grid video-state">
      <div
        class="absolute bottom-0 w-full black-shadow"
        style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
border-radius: 0px 0px 20px 20px; height: 210px; "
      ></div>
      <div
        class="absolute flex items-center self-center justify-center bg-white rounded-full"
        style="width: 80px; height: 80px; justify-self: center;"
      >
        <icon icon="play" class="play" style="height: 37px; width: 37px;" />
      </div>
      <div
        @click="showImage = true"
        class="w-full shadow-card bg-primary-500 cursor-pointer"
        style="height: 500px; border-radius: 20px;"
      >
        <img src="/central/octafest-looks.gif" class="block object-cover w-full h-full sm:hidden" />
        <video class="hidden object-cover w-full h-full sm:block" autoplay loop muted>
          <source src="/central/octafest-looks-2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div
      v-if="showImage"
      class="fixed top-0 left-0 z-30 w-full h-full flex items-center justify-center"
      id="fullImg"
      tabindex="-1"
    >
      <div
        @click="showImage = false"
        class="fixed top-0 left-0 z-20 w-full h-full overflow-auto overflow-auto img-full"
        style="background-color: rgba(0, 0, 0, .6);"
      ></div>
      <div
        class="modal-content z-20"
        style="width: 75%;
    animation-name: zoom;
    animation-duration: 0.6s;"
      >
        <div class="flex flex-end mb-4" @click="showImage = false">
          <p class="flex-1"></p>
          <div
            class="cursor-pointer relative bg-white rounded-full flex items-center justify-center mr-3"
            style="height: 40px; width: 40px"
          >
            <p class="text-4xl text-black focus:outline-none">&times;</p>
          </div>
        </div>

        <div class="modal-body relative flex justify-center items-center">
          <video
            class="max-w-full h-auto md:block hidden focus:outline-none"
            style="border-radius: 20px;"
            controls
            autoplay
            loop
            muted
          >
            <source src="/central/octafest-users-highres.mp4" type="video/mp4" />
          </video>
          <video
            class="max-w-full h-auto md:hidden block focus:outline-none"
            style="border-radius: 20px;"
            controls
            loop
            muted
          >
            <source src="/central/octafest-users-highres.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <div
      class="container relative grid gap-5 px-8 grid-auto-cols-266 grid-auto-rows-275"
      style="top: -124px"
    >
      <div
        @click="showImage = true"
        class="relative block p-3 rounded cursor-pointer group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <img src="/central/intuitive.svg" class="mt-5 ml-5" alt="intuitive" />
        </div>
        <h3
          class="relative mt-3 mb-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >Visual &amp; intuitive</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Films, events, guests, competitions &amp; other tools for your festival.</p>
        <div class="flex items-center">
          <p class="relative pb-0 pr-2 ml-5 text-lg text-grey-500 group-hover:text-black">Play video</p>
          <icon
            class="fill-current text-grey-500 group-hover:text-black"
            icon="card_play"
            style="width: 24px; height: 24px;"
          />
        </div>
      </div>
      <div
        @click="showImage = true"
        class="relative cursor-pointer block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <img src="/central/collaborate.svg" class="mt-5 ml-5" alt="collaborate" />
        </div>
        <h3
          class="relative mt-3 mb-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >Collaborate</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Create with your team, directors, jury &amp; volunteers on a single platform.</p>
        <div class="flex items-center">
          <p class="relative pb-0 pr-2 ml-5 text-lg text-grey-500 group-hover:text-black">Play video</p>
          <icon
            class="fill-current text-grey-500 group-hover:text-black"
            icon="card_play"
            style="width: 24px; height: 24px;"
          />
        </div>
      </div>
      <a
        href="#look"
        class="relative block p-3 rounded group bg bg-cream-500 text-default hover:bg-white hover:shadow-card"
        style="border-radius: 20px;"
      >
        <div class="fill-current">
          <img src="/central/deliver-content.svg" class="mt-5 ml-5" alt="deliver-content" />
        </div>
        <h3
          class="relative mt-3 mb-2 ml-5 text-lg font-bold"
          style="font-family: Merriweather;"
        >Deliver content</h3>
        <p
          class="relative pb-3 pr-3 ml-5 text-lg text-grey-500 group-hover:text-black"
        >Snazzy and reliable website, mobile app and emails;</p>
        <div class="flex items-center">
          <p
            class="relative pb-0 pr-2 ml-5 text-lg text-grey-500 group-hover:text-black"
          >See how it will look</p>
          <icon
            class="fill-current text-grey-500 group-hover:text-black"
            icon="link"
            style="width: 24px; height: 24px;"
          />
        </div>
      </a>
      <div class="relative">
        <div class="absolute w-full h-full group card" style="min-width: 240px;">
          <div class="absolute w-full h-full three-card" style="border-radius: 20px; "></div>
          <div
            class="absolute h-full three-card bg-teal-shadow"
            style="border-radius: 20px; width: 90%;"
          ></div>

          <a
            href="/tools"
            class="absolute block h-full p-3 rounded three-card-main bg-cream-500 text-default"
            style="border-radius: 20px; width: 78%;"
          >
            <div class="fill-current">
              <img src="/central/more.svg" class="mt-5 ml-5" alt="more" />
            </div>
            <h3
              class="relative mt-3 mb-2 ml-5 text-lg font-bold"
              style="font-family: Merriweather;"
            >More features</h3>
            <div class="flex items-center">
              <p
                class="relative pb-0 pr-2 ml-5 text-lg text-grey-500 group-hover:text-black"
              >Learn more</p>
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
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "Tools",
  components: {
    Icon,
  },
  setup() {
    let showImage = false;

    return {
      showImage,
    };
  },
};
</script>
