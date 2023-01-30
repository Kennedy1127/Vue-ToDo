<template>
  <TheModal>
    <template #modalConfirm>
      <ModalConfirm :warningSign="warningSign" :warningText="warningText">
        <ModalButton class="bg-brand-red-1" @click="$emit('leave')"
          >Leave</ModalButton
        >
        <ModalButton class="bg-brand-green-1" @click="$emit('cancelLeave')"
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

const warningSign = ref('Undone Note');
const warningText = ref(
  'This action will delete the unfinished note. Are you sure you want to leave?'
);
</script>
