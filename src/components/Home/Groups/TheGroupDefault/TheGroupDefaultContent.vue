<template>
  <div class="relative">
    <TheGroupDefaultImage
      @mouseenter="hoverGroupImage = true"
      @mouseleave="hoverGroupImage = false"
    />
    <GroupHoverBox v-if="hoverGroupImage && title" />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import TheGroupDefaultImage from '@/components/Home/Groups/TheGroupDefault/TheGroupDefaultImage.vue';
import GroupHoverBox from '@/components/Home/Groups/GroupHoverBox.vue';

// hover event
const hoverGroupImage = ref(false);
//

// inject
const title = inject('title');
//
</script>
