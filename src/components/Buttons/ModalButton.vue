<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  @apply h-[40px] w-[80px] px-2 py-1 text-xl transition hover:-translate-y-3;
}
</style>
