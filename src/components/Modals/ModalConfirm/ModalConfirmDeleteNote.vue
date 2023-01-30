<template>
  <TheModal @click.self="$emit('cancelDeleteNote')">
    <template #modalConfirm>
      <ModalConfirm :warningSign="warningSign" :warningText="warningText">
        <ModalButton class="bg-brand-red-1" @click="$emit('deleteNote')"
          >Delete</ModalButton
        >
        <ModalButton class="bg-brand-green-1" @click="$emit('cancelDeleteNote')"
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

const warningSign = ref('Delete Note');
const warningText = ref(
  'Are you sure you want to delete the note? If you delete the note, it will be permanently lost. Make sure before you delete the note.'
);
</script>
