<template>
  <TheGroupImage
    @mouseenter="hoverGroupImage = true"
    @mouseleave="hoverGroupImage = false"
    data-testid="TheGroupImage"
  />
  <GroupHoverBox v-if="hoverGroupImage" data-testid="GroupHoverBox" />
</template>

<script setup>
import { ref } from 'vue';
import TheGroupImage from '@/components/Groups/TheGroup/TheGroupImage.vue';
import GroupHoverBox from '@/components/Groups/GroupHoverBox.vue';

const hoverGroupImage = ref(false);
</script>
