<template>
  <div
    class="image-rounded overflow-hidden hover:cursor-pointer desktop-sm:h-14 desktop-sm:w-14 desktop-md:h-16 desktop-md:w-16"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.image-rounded {
  border-radius: 50%;
  transition: all 0.3s ease;
}

.image-rounded:hover {
  border-radius: 25%;
}
</style>
