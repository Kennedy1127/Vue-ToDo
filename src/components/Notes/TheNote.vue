<template>
  <div
    class="scrollbar-card h-desktop-note w-full cursor-pointer overflow-hidden bg-brand-note p-2 pb-0 shadow-desktop-note transition hover:-translate-y-2 hover:scale-105 hover:overflow-y-scroll hover:shadow-desktop-note-hover"
  >
    <div class="relative flex h-full w-full flex-col">
      <!-- title -->
      <div class="w-full">
        <div
          class="flex flex-col items-center text-center text-2xl font-normal"
        >
          <span>{{ props.title }}</span>
          <span class="text-base">{{ props.date }}</span>
        </div>
        <div class="redline"></div>
      </div>
      <!-- title -->

      <!-- text -->
      <div class="note-underline w-full flex-1 text-lg font-light">
        <span>{{ props.text }}</span>
      </div>
      <!-- text -->

      <!-- delete note -->
      <div
        class="cursor-pointe absolute -top-1 right-0"
        @click="$emit('triggerModalConfrimDeleteNote', props.id)"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <!-- delete note -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: 'Note',
  },
  date: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
    default: 'Default Content',
  },
});
</script>

<style scoped>
.redline {
  width: 100%;
  background-color: red;
  height: 4px;
}

.note-underline {
  line-height: 1.6em;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0 1.4em,
    steelblue 1.4em calc(1.4em + 2px),
    transparent calc(1.4em + 2px) calc(1.6em)
  );
}

.scrollbar-card::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-card::-webkit-scrollbar-track-piece {
  background: transparent;
}

.scrollbar-card::-webkit-scrollbar-thumb {
  background-color: rgba(80, 80, 80);
  border: 1px solid slategrey;
}
</style>
