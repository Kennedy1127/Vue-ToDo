<template>
  <div
    class="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-modal-background"
  >
    <slot name="createNote"></slot>
    <slot name="modalConfirm"></slot>
    <slot name="modalSpinning"></slot>
  </div>
</template>
