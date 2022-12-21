<template>
  <GroupImage
    :sourceImage="props.sourceImage"
    @mouseEnter="hoverGroupHoverBox = true"
    @mouseLeave="hoverGroupHoverBox = false"
  />
  <div
    class="absolute text-brand-grey-2 desktop-sm:left-[100px] desktop-md:left-[130px]"
    :class="groupHoverBoxClass"
  >
    <GroupHoverBox :class="showGroupHoverBox" :title="props.title" />
  </div>
</template>

<script setup>
//       :class="{ 'top-2': group.id === 1, 'top-7': group.id !== 1 }"
import { ref, computed } from 'vue';
import GroupImage from '@/components/Home/Groups/GroupImage.vue';
import GroupHoverBox from '@/components/Home/Groups/GroupHoverBox.vue';

const props = defineProps({
  sourceImage: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});

const groupHoverBoxClass = computed(() => ({
  'top-7': props.id !== 1,
  'top-2': props.id === 1,
}));

const hoverGroupHoverBox = ref(false);
const showGroupHoverBox = computed(() => ({
  invisible: !hoverGroupHoverBox.value,
}));
</script>
