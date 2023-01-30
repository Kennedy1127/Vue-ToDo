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
          :date="dateConvert(note.timestamp)"
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

  <!-- modal spinning -->
  <ModalSpinning v-if="storeUser.isPending" />
  <!-- modal spinning -->
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import { useUserStore } from '@/stores/storeUser';
import getNotes from '@/composables/getNotes';
import TheNote from '@/components/Notes/TheNote.vue';
import ModalConfirmDeleteNote from '@/components/Modals/ModalConfirm/ModalConfirmDeleteNote.vue';
import ModalSpinning from '@/components/Modals/ModalSpinning.vue';
import useNotes from '@/composables/useNotes';

// store
const storeNotes = useNotesStore();
const storeUser = useUserStore();
//

// get notes
const { notes } = getNotes();
watchEffect(() => {
  notes.value
    ? (storeNotes.updateCurrentNotes(notes.value),
      storeUser.switchIsPendingMode(false))
    : storeUser.switchIsPendingMode(true);
});

const dateConvert = (time) => {
  const date = new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
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

const deleteNote = async () => {
  const { updateNote } = useNotes();
  try {
    const data = storeNotes.currentNotes.filter(
      (el) => el.id !== selectedDeleteNoteID.value
    );

    await updateNote({ notes: [...data] });
  } catch (err) {
    console.error(err);
  }

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
