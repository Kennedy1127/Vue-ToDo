<template>
  <div
    class="image-rounded overflow-hidden hover:cursor-pointer desktop-sm:h-14 desktop-sm:w-14 desktop-md:h-16 desktop-md:w-16"
    @mouseenter="$emit('mouseEnter')"
    @mouseleave="$emit('mouseLeave')"
  >
    <img v-lazy="image" class="h-full w-full object-cover" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  sourceImage: {
    type: String,
    required: true,
  },
});

const image = ref({
  src: props.sourceImage,
  loading: '/src/assets/loading.png',
  error: '/src/assets/loading.png',
  delay: 500,
});
</script>

<style scoped>
.image-rounded {
  border-radius: 50%;
  transition: all 0.3s ease;
}

.image-rounded:hover {
  border-radius: 25%;
}
</style>
