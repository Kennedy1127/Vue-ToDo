<template>
  <div
    class="relative h-16 w-full overflow-hidden pb-3 text-5xl font-semibold text-brand-blue"
  >
    <h2 class="title" :class="classSignIn">Sign In</h2>
    <h2 class="title" :class="classSignUp">Sign Up</h2>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modeSignInIsTriggered: {
    type: Boolean,
    requried: true,
  },
});

const classSignIn = computed(() => ({
  'left-0': props.modeSignInIsTriggered,
  '-left-full': !props.modeSignInIsTriggered,
}));

const classSignUp = computed(() => ({
  'left-full': props.modeSignInIsTriggered,
  'left-0': !props.modeSignInIsTriggered,
}));
</script>

<style scoped>
.title {
  @apply absolute top-0 w-full;
  transition: all 0.3s linear;
}
</style>
