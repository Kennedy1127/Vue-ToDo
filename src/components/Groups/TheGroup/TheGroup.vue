<template>
  <div class="relative h-full w-full">
    <TheGroupContent />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import TheGroupContent from '@/components/Groups/TheGroup/TheGroupContent.vue';

const props = defineProps({
  groupImage: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});

provide('groupImage', props.groupImage);
provide('title', props.title);
</script>
