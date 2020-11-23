<template>
  <div class="fixed bottom-0 right-0 z-50 mb-6">
    <a
      href="https://discord.gg/ne6rT6J"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center p-6 space-x-4 overflow-hidden duration-200 ease-in transform translate-x-32 bg-chat-idle hover:bg-chat-hover shadow-chat hover:translate-x-0"
      style="height: 76px; width: 203px; border-radius: 20px 0px 0px 20px"
    >
      <Icon icon="chat" class="w-10 h-10" />
      <div>
        <h3 class="text-lg font-extrabold">Help chat</h3>
        <p>Open &gt;</p>
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "Chat",
  components: {
    Icon,
  },
};
</script>
