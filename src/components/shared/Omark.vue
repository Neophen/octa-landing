<template>
  <div class="relative">
    <h3 class="text-2xl leading-5 font-heading"><slot /></h3>
    <div class="absolute top-0 bottom-0 flex items-end text-cream-600">
      <icon icon="title-mark" style="width: 129px; height: 20px; z-index: -1;" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Omark",
};
</script>
