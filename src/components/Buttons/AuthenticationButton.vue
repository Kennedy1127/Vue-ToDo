<template>
  <button
    class="mt-5 w-full bg-brand-blue-1 px-2 py-1 text-2xl font-light text-white"
  >
    {{ props.buttonMode }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonMode: {
    type: String,
    required: 'true',
  },
});
</script>
