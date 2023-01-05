<template>
  <div class="relative">
    <TheGroupDefaultContent />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import TheGroupDefaultContent from '@/components/Home/Groups/TheGroupDefault/TheGroupDefaultContent.vue';

// props
const props = defineProps({
  sourceImage: {
    type: String,
    required: false,
  },
  isHome: {
    type: Boolean,
    required: false,
    default: false,
  },
});
//

// provide
provide('sourceImage', props.sourceImage);
provide('title', 'Create a group');
provide('isHome', props.isHome);
//
</script>
