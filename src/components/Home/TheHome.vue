<template>
  <div class="flex h-screen w-full">
    <!-- Groups -->
    <div
      class="h-full bg-brand-black-1 shadow-desktop-modal desktop-sm:w-[100px] desktop-sm:pl-3 desktop-md:w-[150px] desktop-md:pl-3 desktop-md:pr-2"
    >
      <TheGroups />
    </div>
    <!-- Groups -->

    <!-- Notes -->
    <div class="h-full flex-1 bg-brand-black-2">
      <TheNotes />

      <ModalCreateNote
        v-if="modalCreateNoteIsTriggered"
        @triggerModalConfirmCreateNote="triggerModalConfirmCreateNote"
        @triggerModalCancelCreateNote="triggerModalCancelCreateNote"
      />

      <ModalCreateNoteButton
        v-if="!modalCreateNoteIsTriggered"
        @click="modalCreateNoteIsTriggered = true"
      />

      <ModalConfirmCreateNote
        v-if="modalConfirmCreateNoteIsTriggered"
        @createNote="createNote"
        @cancelCreateNote="modalConfirmCreateNoteIsTriggered = false"
      />

      <ModalConfirmCancelCreateNote
        v-if="modalConfirmCancelCreateNoteIsTriggered"
        @leave="reset"
        @cancelLeave="modalConfirmCancelCreateNoteIsTriggered = false"
      />
    </div>
    <!-- Notes -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import TheGroups from '@/components/Groups/TheGroups.vue';
import TheNotes from '@/components/Notes/TheNotes.vue';
import ModalCreateNote from '@/components/Modals/ModalCreateNote.vue';
import ModalCreateNoteButton from '@/components/Modals/ModalCreateNoteButton.vue';
import ModalConfirmCreateNote from '@/components/Modals/ModalConfirm/ModalConfirmCreateNote.vue';
import ModalConfirmCancelCreateNote from '@/components/Modals/ModalConfirm/ModalConfirmCancelCreateNote.vue';

// desktop-md:pl-3 desktop-md:pr-2 desktop-sm:pl-3 下拉軸寬12px 所以左邊padding補12px

// const test = () => console.log('test');

// store
const storeNotes = useNotesStore();
//

// trigger modal confirm create note
const modalCreateNoteIsTriggered = ref(false);

const triggerModalConfirmCreateNote = (submitedNote) => {
  modalConfirmCreateNoteIsTriggered.value = true;
  note.value = submitedNote;
};
//

// trigger create note
const modalConfirmCreateNoteIsTriggered = ref(false);
const note = ref(null);

const createNote = () => {
  if (typeof note.value === 'object') {
    storeNotes.createNote(note.value);
    reset();
    note.value = ref(null);
  }
};
//

// trigger confirm cancel create note
const modalConfirmCancelCreateNoteIsTriggered = ref(false);

const triggerModalCancelCreateNote = (submitedNote) => {
  !submitedNote.title && !submitedNote.text
    ? reset()
    : (modalConfirmCancelCreateNoteIsTriggered.value = true);
};
//

// reset modal
const reset = () => {
  modalConfirmCreateNoteIsTriggered.value = false;
  modalConfirmCancelCreateNoteIsTriggered.value = false;
  modalCreateNoteIsTriggered.value = false;
};
//
</script>
