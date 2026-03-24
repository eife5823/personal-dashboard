<template>
  <section class="bg-primary flex h-full w-full">
    <Aside class="h-full" />
    <div class="flex flex-col h-full w-full">
      <Header class="min-h-15" />
      <!-- <Loading v-if="isLoading" /> -->
      <router-view class="px-7 py-6 flex-1" />
    </div>
  </section>
</template>

<script setup lang="ts">
const mainStore = useMainStore()

const { isLoading } = storeToRefs(mainStore)
</script>

<style scoped></style>
