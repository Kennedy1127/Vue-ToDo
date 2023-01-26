<template>
  <div
    class="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-modal-background"
  >
    <slot name="createNote"></slot>
    <slot name="modalConfirm"></slot>
  </div>
</template>
