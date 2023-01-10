<template>
  <GroupCircleBox
    :class="backgroundColor"
    @mouseenter="hoverGroupImage = true"
    @mouseleave="hoverGroupImage = false"
    data-testid="GroupCircleBox"
  >
    <div
      v-if="sourceImage"
      class="flex h-full w-full items-center justify-center"
    >
      <img
        :src="sourceImage"
        alt=""
        class="h-3/5 w-3/5 object-cover"
        data-testid="sourceImage"
      />
    </div>
    <div v-else class="relative h-full w-full">
      <div
        class="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 pb-[2px]"
        :class="crosshairColor"
        data-testid="crosshair"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 pr-[2px]"
        :class="crosshairColor"
        data-testid="crosshair"
      ></div>
    </div>
  </GroupCircleBox>
</template>

<script setup>
import { computed, inject, ref } from 'vue';
import GroupCircleBox from '@/components/Home/Groups/GroupCircleBox.vue';

// inject
const sourceImage = inject('sourceImage');
const isHome = inject('isHome');
//

// background color
const backgroundColor = computed(() => ({
  'bg-brand-black-3': true,
  'hover:bg-brand-green-1': !isHome,
  'hover:bg-brand-blue-1': isHome,
}));
//

// default crosshair color & hover event
const hoverGroupImage = ref(false);

const crosshairColor = computed(() => ({
  'bg-brand-green-1': !hoverGroupImage.value,
  'bg-brand-white-1': hoverGroupImage.value,
}));
//
</script>
