<template>
  <section class="modal w-full">
    <div class="mask flex-center w-svw left-0 top-0 fixed h-svh" @click="emit('close-modal')" />
    <div class="modal-content flex-center">
      <component :is="currentModal" v-bind="modalProps" @close="emit('close-modal')" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ModalType, ModalProps } from '@/types'

const emit = defineEmits(['close-modal'])

defineProps({
  currentModal: {
    type: Object as PropType<ModalType>,
    required: true
  },
  modalProps: {
    type: Object as PropType<ModalProps | null>,
    required: false,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
}
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
}
</style>
