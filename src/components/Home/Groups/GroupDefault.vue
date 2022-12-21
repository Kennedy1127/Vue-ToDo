<template>
  <GroupDefaultImage
    @mouseEnter="hoverGroupHoverBox = true"
    @mouseLeave="hoverGroupHoverBox = false"
  />
  <div
    class="absolute top-2 text-brand-grey-2 desktop-sm:left-[100px] desktop-md:left-[130px]"
  >
    <GroupHoverBox :class="showGroupHoverBox" title="Create a new group" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import GroupDefaultImage from '@/components/Home/Groups/GroupDefaultImage.vue';
import GroupHoverBox from '@/components/Home/Groups/GroupHoverBox.vue';

const hoverGroupHoverBox = ref(false);
const showGroupHoverBox = computed(() => ({
  invisible: !hoverGroupHoverBox.value,
}));
</script>
