import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('Notes', () => {
  // state
  const currentNotes = ref(null);

  // actions
  const updateCurrentNotes = (notes) => {
    currentNotes.value = notes;
  };

  return { currentNotes, updateCurrentNotes };
});
