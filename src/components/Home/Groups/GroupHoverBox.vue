<template>
  <div
    class="relative w-[140px] max-w-[130px] whitespace-pre-line rounded-lg bg-brand-black-1 py-1.5 px-2 text-base"
  >
    <p class="break-words">
      {{ props.title }}
    </p>

    <div class="triangle absolute top-2 -left-3"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.triangle {
  border-style: solid;
  border-width: 10px 20px 10px 0;
  border-color: transparent #202020 transparent transparent;
}
</style>
