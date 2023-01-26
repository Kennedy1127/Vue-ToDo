<template>
  <div class="relative">
    <TheGroupDefaultImage
      @mouseenter="hoverGroupImage = true"
      @mouseleave="hoverGroupImage = false"
      data-testid="TheGroupDefaultImage"
    />
    <GroupHoverBox
      v-if="hoverGroupImage && title"
      data-testid="GroupHoverBox"
    />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import TheGroupDefaultImage from '@/components/Groups/TheGroupDefault/TheGroupDefaultImage.vue';
import GroupHoverBox from '@/components/Groups/GroupHoverBox.vue';

// hover event
const hoverGroupImage = ref(false);
//

// inject
const title = inject('title');
//
</script>
