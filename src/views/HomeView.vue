<template>
  <TheHome v-if="!isMobile" />
</template>

<script setup>
import { ref, computed } from 'vue';
import TheHome from '@/components/Home/TheHome.vue';

const currentWidth = ref(window.innerWidth);
const isMobile = computed(() => currentWidth.value < 1000);

window.addEventListener('resize', () => {
  currentWidth.value = window.innerWidth;
});
</script>
