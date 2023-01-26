<template>
  <!-- card -->
  <div
    class="flex h-desktop-modal w-desktop-modal flex-col items-center bg-brand-black-1 p-4"
  >
    <!-- warning sign -->
    <div class="flex w-full items-center">
      <font-awesome-icon
        icon="fa-solid fa-triangle-exclamation"
        class="h-10 w-10 text-brand-yellow"
      />

      <span class="pt-1 pl-3 text-4xl text-white">{{ props.warningSign }}</span>
    </div>
    <!-- warning sign -->

    <!-- warning text -->
    <div class="w-full pt-2 text-xl leading-relaxed text-white">
      <p>
        {{ props.warningText }}
      </p>
      <p></p>
    </div>
    <!-- warning text -->

    <!-- decision -->
    <div class="mt-auto flex w-full flex-row-reverse gap-3">
      <slot></slot>
    </div>
    <!-- decision -->
  </div>
  <!-- card -->
</template>

<script setup>
const props = defineProps({
  warningSign: {
    type: String,
    required: true,
    default: 'Default Sign',
  },
  warningText: {
    type: String,
    required: true,
    default: 'Default Text',
  },
});
</script>
