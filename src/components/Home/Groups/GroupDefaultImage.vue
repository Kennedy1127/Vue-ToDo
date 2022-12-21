<template>
  <div
    class="image-rounded flex items-center justify-center overflow-hidden bg-brand-black-3 hover:cursor-pointer desktop-sm:h-14 desktop-sm:w-14 desktop-md:h-16 desktop-md:w-16"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <img
      v-lazy="image"
      class="object-cover desktop-sm:h-6 desktop-sm:w-6 desktop-md:h-8 desktop-md:w-8"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['mouseEnter', 'mouseLeave']);

const imageSrc = ref('/src/assets/home/plus-green.png');

const mouseEnter = () => {
  emit('mouseEnter');
  imageSrc.value = '/src/assets/home/plus-white.png';
};

const mouseLeave = () => {
  emit('mouseLeave');
  imageSrc.value = '/src/assets/home/plus-green.png';
};

const image = computed(() => ({
  src: imageSrc.value,
  loading: '/src/assets/loading.png',
  error: '/src/assets/loading.png',
}));
</script>

<style scoped>
.image-rounded {
  border-radius: 50%;
  transition: all 0.3s ease;
}

.image-rounded:hover {
  border-radius: 25%;
  @apply bg-brand-green-1;
}
</style>
