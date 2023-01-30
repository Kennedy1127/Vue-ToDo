<template>
  <TheModal @click.self="cancelModalCreateNote">
    <template #createNote>
      <!-- card -->
      <div
        class="h-desktop-create-note w-desktop-create-note bg-brand-note shadow-desktop-modal"
      >
        <form
          @submit.prevent="handleSubmit"
          class="relative flex h-full w-full flex-col p-3"
        >
          <!-- title -->
          <div class="w-full">
            <div
              class="flex flex-col items-center text-center text-3xl font-normal"
            >
              <input
                type="text"
                class="bg-transparent text-center outline-none"
                v-model="inputTitle"
                @keypress.enter="$event.preventDefault()"
              />
              <!-- date -->
              <span class="text-xl">{{ currentDate }}</span>
              <!-- date -->
            </div>
            <div class="redline"></div>
          </div>
          <!-- title -->

          <!-- text -->
          <div class="w-full flex-1">
            <textarea
              class="scrollbar-card note-underline h-full w-full resize-none text-lg font-light outline-none"
              v-model="inputText"
            >
            </textarea>
          </div>
          <!-- text -->

          <!-- submit -->
          <div
            class="absolute top-1 left-1 cursor-pointer"
            @click="handleSubmit"
          >
            <font-awesome-icon icon="fa-solid fa-check" class="h-8 w-8" />
          </div>
          <!-- submit -->

          <!-- cancel -->
          <div
            class="absolute top-1 right-1 cursor-pointer"
            @click="cancelModalCreateNote"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" class="h-8 w-8" />
          </div>
          <!-- cancel -->
        </form>
      </div>
      <!-- card -->
    </template>
  </TheModal>
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Timestamp } from '@firebase/firestore';
import { auth } from '@/firebase/config';
import TheModal from '@/components/Modals/TheModal.vue';

// emit
const emits = defineEmits([
  'triggerModalConfirmCreateNote',
  'triggerModalCancelCreateNote',
]);
//

// title
const inputTitle = ref('Default Title');
// title

// date
const date = new Date();
const currentDate = ref(
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);
//

// text
const inputText = ref('Default Content');
//

// submit
const handleSubmit = () => {
  const note = {
    id: uuidv4(),
    title: inputTitle.value,
    date: currentDate.value,
    text: inputText.value,
    timestamp: Timestamp.now(),
    username: auth.currentUser.displayName,
  };

  emits('triggerModalConfirmCreateNote', note);
};
//

// cancel
const cancelModalCreateNote = () => {
  const note = {
    title: inputTitle.value,
    text: inputText.value,
  };

  emits('triggerModalCancelCreateNote', note);
};
//
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
