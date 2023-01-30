<template>
  <div class="relative h-desktop-authentication-system w-full overflow-hidden">
    <AuthenticationSignin class="system" :class="classSignIn" />
    <AuthenticationSignup class="system" :class="classSignUp" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AuthenticationSignin from '@/components/Authentication/AuthenticationSignin.vue';
import AuthenticationSignup from '@/components/Authentication/AuthenticationSignup.vue';

const props = defineProps({
  modeSignInIsTriggered: {
    type: Boolean,
    required: true,
  },
});

const classSignIn = computed(() => ({
  'left-0': props.modeSignInIsTriggered,
  '-left-full': !props.modeSignInIsTriggered,
}));

const classSignUp = computed(() => ({
  'left-full': props.modeSignInIsTriggered,
  'left-0': !props.modeSignInIsTriggered,
  'ml-4': props.modeSignInIsTriggered,
}));
</script>

<style scoped>
.system {
  @apply absolute top-0 w-full;
  transition: all 0.3s linear;
}
</style>
