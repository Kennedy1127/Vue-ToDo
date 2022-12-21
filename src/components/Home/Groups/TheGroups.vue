<template>
  <div class="flex flex-col items-center">
    <div class="pb-2 desktop-sm:pt-4 desktop-md:pt-5">
      <GroupImage :sourceImage="mainImage" />
    </div>
    <div class="w-1/2 bg-brand-grey-1 pb-0.5"></div>
    <div class="pt-2">
      <div
        v-for="group in groups"
        :key="group.id"
        class="relative pt-5 first:pt-0"
      >
        <TheGroup
          :sourceImage="group.imageSrc"
          :id="group.id"
          :title="group.title"
        />
      </div>
    </div>
    <div class="pt-5">
      <div class="relative">
        <GroupDefault />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheGroup from '@/components/Home/Groups/TheGroup.vue';
import GroupImage from '@/components/Home/Groups/GroupImage.vue';
import GroupDefault from '@/components/Home/Groups/GroupDefault.vue';

const mainImage = ref('/src/assets/home/smartphone.png');

const groups = ref([
  {
    id: 1,
    title: 'Real Madrid CF',
    imageSrc: '/src/assets/home/icon-1.png',
  },
  { id: 2, title: 'Group 2 Group 2', imageSrc: '/src/assets/home/icon-2.png' },
  {
    id: 3,
    title: 'Group 3 Group 3 Group 3',
    imageSrc: '/src/assets/home/icon-3.png',
  },
  {
    id: 4,
    title: 'Group 4 Group 4 Group 4 Group 4',
    imageSrc: '/src/assets/home/icon-4.png',
  },
  {
    id: 5,
    title: 'Group Group Group Group Group',
    imageSrc: '/src/assets/home/icon-5.png',
  },
  {
    id: 6,
    title: 'Group Group Group Group Group Group',
    imageSrc: '/src/assets/home/icon-6.png',
  },
  {
    id: 7,
    title: 'GroupGroup Group Group Group Group Group',
    imageSrc: '/src/assets/home/icon-7.jpg',
  },
]);
</script>
