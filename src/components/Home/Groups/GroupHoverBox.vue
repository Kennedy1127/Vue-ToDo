<template>
  <div
    class="absolute top-2 text-brand-grey-2 desktop-sm:left-[100px] desktop-md:left-[130px]"
  >
    <div
      class="relative w-[140px] max-w-[130px] whitespace-pre-line rounded-lg bg-brand-black-1 py-1.5 px-2 text-base"
    >
      <p class="break-words">
        {{ title }}
      </p>

      <div class="triangle absolute top-2 -left-3"></div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const title = inject('title');
</script>

<style scoped>
.triangle {
  border-style: solid;
  border-width: 10px 20px 10px 0;
  border-color: transparent #202020 transparent transparent;
}
</style>
