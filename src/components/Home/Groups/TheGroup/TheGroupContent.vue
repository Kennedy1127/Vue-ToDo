<template>
  <TheGroupImage
    @mouseenter="hoverGroupImage = true"
    @mouseleave="hoverGroupImage = false"
  />
  <GroupHoverBox v-if="hoverGroupImage" />
</template>

<script setup>
import { ref } from 'vue';
import TheGroupImage from '@/components/Home/Groups/TheGroup/TheGroupImage.vue';
import GroupHoverBox from '@/components/Home/Groups/GroupHoverBox.vue';

const hoverGroupImage = ref(false);
</script>
