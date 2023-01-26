<template>
  <div class="scrollbar h-full overflow-y-scroll p-5">
    <!-- notes -->
    <div class="grid w-full grid-cols-12 gap-6 pt-2">
      <div
        v-for="note in notes"
        :key="note.id"
        class="desktop-note-sm:col-span-4 desktop-note-md:col-span-3"
      >
        <TheNote
          :id="note.id"
          :title="note.title"
          :date="note.date"
          :text="note.text"
          @triggerModalConfrimDeleteNote="triggerModalConfrimDeleteNote"
        />
      </div>
    </div>
  </div>
  <!-- notes -->

  <!-- delete note modal -->
  <ModalConfirmDeleteNote
    v-if="modalConfirmDeleteNoteIsTriggered"
    @deleteNote="deleteNote"
    @cancelDeleteNote="cancelDeleteNote"
  />
  <!-- delete note modal -->
</template>

<script setup>
import { ref, computed } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import TheNote from '@/components/Notes/TheNote.vue';
import ModalConfirmDeleteNote from '@/components/Modals/ModalConfirm/ModalConfirmDeleteNote.vue';

// const test = () => console.log('test');

// stores
const storeNotes = useNotesStore();
//

// fetch notes
const notes = computed(() => storeNotes.notes);
//

// delete note
const modalConfirmDeleteNoteIsTriggered = ref(false);
const selectedDeleteNoteID = ref(null);

const triggerModalConfrimDeleteNote = (id) => {
  modalConfirmDeleteNoteIsTriggered.value = true;
  selectedDeleteNoteID.value = id;
};

const resetDeleteNote = () => {
  modalConfirmDeleteNoteIsTriggered.value = false;
  selectedDeleteNoteID.value = null;
};

const cancelDeleteNote = () => resetDeleteNote();

const deleteNote = () => {
  storeNotes.deleteNote(selectedDeleteNoteID.value);
  resetDeleteNote();
};
//
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 8px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(80, 80, 80);
  border: 1px solid slategrey;
}
</style>
