<template>
  <GroupCircleBox class="bg-brand-black-2">
    <img v-lazy="image" class="h-full w-full object-cover" />
  </GroupCircleBox>
</template>

<script setup>
import { ref, inject } from 'vue';
import GroupCircleBox from '@/components/Home/Groups/GroupCircleBox.vue';

// inject
const groupImage = inject('groupImage');
//

// image data
const image = ref({
  src: groupImage,
  loading: '/src/assets/loading.gif',
  error: '/src/assets/home/default.png',
});
//
</script>
