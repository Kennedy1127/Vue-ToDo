<template>
  <div
    class="fixed left-10 bottom-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-brand-blue-1 opacity-70 transition hover:opacity-100"
    @click="handleSignout"
  >
    <font-awesome-icon icon="fa-solid fa-plus" class="h-1/2 w-1/2 text-white" />
  </div>
</template>

<script setup>
import useSignout from '@/composables/useSignout';
import router from '@/router';

const { signout } = useSignout();

const handleSignout = async () => {
  await signout();
  router.push({ name: 'Signin' });
};
</script>
