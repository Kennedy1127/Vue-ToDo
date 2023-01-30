<template>
  <div class="background h-screen w-full bg-black">
    <!-- slice from 70deg -->
    <div class="slice-to-two-parts flex h-full w-full">
      <!-- first part -->
      <div class="h-full w-full">
        <AuthenticationInterface />
      </div>
      <!-- first part -->

      <!-- second part -->
      <div class="h-full w-full"></div>
      <!-- second part -->
    </div>
    <!-- slice from 70deg -->
  </div>
</template>

<script setup>
import AuthenticationInterface from '@/components/Authentication/AuthenticationInterface.vue';
</script>

<style scoped>
.background {
  background-image: url('@/assets/authentication/login-background.jpg');
  background-size: contain;
}

.slice-to-two-parts {
  background: linear-gradient(70deg, white 50%, transparent 50%);
}
</style>
