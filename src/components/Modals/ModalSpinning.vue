<template>
  <TheModal class="z-20">
    <template #modalSpinning>
      <TheLoading />
    </template>
  </TheModal>
</template>

<script setup>
import TheModal from '@/components/Modals/TheModal.vue';
import TheLoading from '@/components/loading/TheLoading.vue';
</script>
