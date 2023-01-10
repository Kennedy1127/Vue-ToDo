<template>
  <GroupCircleBox class="bg-brand-black-2">
    <v-lazy-image
      :src="groupImage"
      :src-placeholder="loadingImage"
      class="h-full w-full object-cover"
      use-picture
    />
  </GroupCircleBox>
</template>

<script setup>
import { ref, inject } from 'vue';
import GroupCircleBox from '@/components/Home/Groups/GroupCircleBox.vue';
import VLazyImage from 'v-lazy-image';

// inject groupImage
const groupImage = inject('groupImage');
//

// loadingImage
const loadingImage = ref('/src/assets/loading.gif');
//
</script>
