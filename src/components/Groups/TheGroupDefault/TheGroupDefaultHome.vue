<template>
  <div class="relative">
    <TheGroupDefaultContent />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import TheGroupDefaultContent from '@/components/Groups/TheGroupDefault/TheGroupDefaultContent.vue';

// props
const props = defineProps({
  sourceImage: {
    type: String,
    required: true,
  },
  isHome: {
    type: Boolean,
    required: true,
    default: false,
  },
});
//

// provide
provide('sourceImage', props.sourceImage);
provide('title', false);
provide('isHome', props.isHome);
//
</script>
