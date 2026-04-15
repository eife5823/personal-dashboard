<template>
  <section class="bg-primary flex h-full w-full overflow-hidden">
    <Aside class="h-full" />
    <div class="flex flex-col h-full w-full overflow-hidden">
      <Header class="min-h-15" />
      <Loading v-if="isLoading" />
      <router-view class="px-7 h-[calc(100%-60px)]" />
    </div>
  </section>
</template>

<script setup lang="ts">
const mainStore = useMainStore()

const { isLoading } = storeToRefs(mainStore)
</script>

<style lang="scss" scoped>
section {
  overscroll-behavior: none;
}
</style>
