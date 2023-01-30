<template>
  <div class="flex text-lg font-light">
    <!-- sign in -->
    <div
      class="relative cursor-pointer py-1 px-1"
      @click="switchAuthenticationMode(true)"
    >
      Sign In
      <div class="bar left-0" :class="classSignIn"></div>
    </div>
    <!-- sign in -->

    <!-- sign up -->
    <div
      class="relative cursor-pointer py-1 px-1"
      @click="switchAuthenticationMode(false)"
    >
      Sign Up
      <div class="bar left-0" :class="classSignUp"></div>
    </div>
    <!-- sign up -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/storeUser';

const props = defineProps({
  modeSignInIsTriggered: {
    type: Boolean,
    required: true,
  },
});

// store
const storeUser = useUserStore();
//

// selected mode class
const classSignIn = computed(() => ({
  'w-full': props.modeSignInIsTriggered,
  'w-0': !props.modeSignInIsTriggered,
  'left-full': !props.modeSignInIsTriggered,
}));

const classSignUp = computed(() => ({
  'w-0': props.modeSignInIsTriggered,
  'w-full': !props.modeSignInIsTriggered,
}));
//

// switch mode of authentication
const switchAuthenticationMode = (isTriggered) =>
  storeUser.switchAuthenticationMode(isTriggered);
//
</script>

<style scoped>
.bar {
  @apply absolute -top-[2px] h-[3px] bg-brand-blue-1;
  transition: all 0.3s linear;
}
</style>
