<template>
  <section class="bg-primary flex h-full w-full overflow-hidden">
    <Aside class="h-full" />
    <div class="flex flex-col h-full w-full overflow-hidden">
      <Header class="min-h-15" @show-login="openModal(ModalType.Login)" />
      <Loading v-if="isLoading" />
      <router-view class="px-7 h-[calc(100%-60px)]" />
    </div>
  </section>
  <Modal
    v-if="currentModal"
    :current-modal="currentModal"
    :modal-props="modalProps"
    @close-modal="closeModal"
  />
</template>

<script setup lang="ts">
import { ModalType } from '@/types'

const mainStore = useMainStore()

const { isLoading, currentModal, modalProps } = storeToRefs(mainStore)
const { closeModal, openModal } = mainStore
</script>

<style lang="scss" scoped>
section {
  overscroll-behavior: none;
}
</style>
