<template>
  <section class="bg-secondary w-full flex-space-between h-18 px-8">
    <h5 class="font-bold text-white">{{ route.name }}</h5>
    <div class="flex-space-around w-20">
      <div class="i-tabler-bell text-6 cursor-pointer text-white" />
      <div class="i-tabler-user-filled text-6 cursor-pointer text-white"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
// defineProps<{ msg: string }>()
</script>

<style lang="scss" scoped></style>
