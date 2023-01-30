import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  // state

  // pending
  const isPending = ref(false);

  // default mode of authentication is sign in
  const modeSignInIsTriggered = ref(true);

  // actions

  // switch pending mode
  const switchIsPendingMode = (mode) => (isPending.value = mode);

  // switch mode of authentication
  const switchAuthenticationMode = (isTriggered) =>
    (modeSignInIsTriggered.value = isTriggered);

  return {
    isPending,
    modeSignInIsTriggered,
    switchIsPendingMode,
    switchAuthenticationMode,
  };
});
