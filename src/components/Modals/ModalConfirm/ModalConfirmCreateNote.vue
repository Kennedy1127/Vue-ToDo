<template>
  <TheModal>
    <template #modalConfirm>
      <ModalConfirm :warningSign="warningSign" :warningText="warningText">
        <ModalButton class="bg-brand-green-1" @click="$emit('createNote')"
          >Create</ModalButton
        >
        <ModalButton class="bg-brand-red-1" @click="$emit('cancelCreateNote')"
          >Cancel</ModalButton
        >
      </ModalConfirm>
    </template>
  </TheModal>
</template>

<script setup>
import { ref } from 'vue';
import TheModal from '@/components/Modals/TheModal.vue';
import ModalConfirm from '@/components/Modals/ModalConfirm/ModalConfirm.vue';
import ModalButton from '@/components/Buttons/ModalButton.vue';

const warningSign = ref('Create Note');
const warningText = ref(
  'Are you sure you have finished the note? Make sure you finish the note before publish it.'
);
</script>
