<template>
  <div class="flex h-screen w-full">
    <div
      class="scrollbar overflow-y-scroll bg-brand-black-2 desktop-sm:w-[100px] desktop-sm:py-2 desktop-sm:pl-3 desktop-md:w-[150px] desktop-md:pl-3 desktop-md:pr-2"
    >
      <TheGroups />
    </div>
    <div class="flex-1 bg-brand-black-3">
      <TheCards />
    </div>
  </div>
</template>

<script setup>
import TheGroups from '@/components/Home/Groups/TheGroups.vue';
import TheCards from '@/components/Home/Cards/TheCards.vue';

// desktop-md:pl-3 desktop-md:pr-2 desktop-sm:pl-3 下拉軸寬12px 所以左邊padding補12px
</script>

<style scoped>
.scrollbar {
  box-sizing: content-box;
  padding-right: 200px;
  margin-right: -200px;
}
.scrollbar::-webkit-scrollbar-track {
  display: none;
}

.scrollbar::-webkit-scrollbar {
  width: 12px;
}
</style>
