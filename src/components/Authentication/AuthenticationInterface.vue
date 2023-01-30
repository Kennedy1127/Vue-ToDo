<template>
  <div class="h-full w-2/3 p-4 text-brand-black-1">
    <AuthenticationTitle :modeSignInIsTriggered="modeSignInIsTriggered" />

    <div class="h-[2px] bg-brand-grey-2"></div>

    <AuthenticationModeSwitch :modeSignInIsTriggered="modeSignInIsTriggered" />

    <AuthenticationSystem :modeSignInIsTriggered="modeSignInIsTriggered" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/storeUser';
import AuthenticationTitle from '@/components/Authentication/AuthenticationTitle.vue';
import AuthenticationModeSwitch from '@/components/Authentication/AuthenticationModeSwitch.vue';
import AuthenticationSystem from '@/components/Authentication/AuthenticationSystem.vue';

// const test = () => console.log('test');

// store
const storeUser = useUserStore();
//

// sign in
const modeSignInIsTriggered = computed(() => storeUser.modeSignInIsTriggered);
//
</script>
