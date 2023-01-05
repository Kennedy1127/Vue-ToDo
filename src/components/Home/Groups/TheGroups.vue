<template>
  <div class="flex h-full flex-col items-center">
    <div class="pb-2 desktop-sm:pt-4 desktop-md:pt-5">
      <TheGroupDefaultHome :sourceImage="homeImage" :isHome="true" />
    </div>
    <div class="w-1/2 bg-brand-grey-1 pb-0.5"></div>
    <div class="pt-2">
      <div v-for="group in groups" :key="group.id" class="pt-5 first:pt-0">
        <TheGroup
          :groupImage="group.imageSrc"
          :id="group.id"
          :title="group.title"
        />
      </div>
    </div>
    <div class="pt-5">
      <TheGroupDefaultAddGroupVue />
    </div>
    <div class="mt-auto">
      <TheGroupDefaultSetting :sourceImage="settingImage" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheGroup from '@/components/Home/Groups/TheGroup/TheGroup.vue';
import TheGroupDefaultAddGroupVue from '@/components/Home/Groups/TheGroupDefault/TheGroupDefaultAddGroup.vue';
import TheGroupDefaultHome from '@/components/Home/Groups/TheGroupDefault/TheGroupDefaultHome.vue';
import TheGroupDefaultSetting from '@/components/Home/Groups/TheGroupDefault/TheGroupDefaultSetting.vue';

const homeImage = ref('/src/assets/home/notebook.png');
const settingImage = ref('/src/assets/home/settings.png');

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
