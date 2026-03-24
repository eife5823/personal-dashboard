<template>
  <section class="px-8 bg-secondary flex-space-between w-full">
    <h5 class="text-white font-[Raleway] font-bold">{{ route.name }}</h5>
    <div class="flex-space-around w-20">
      <div class="i-tabler-bell text-6 text-white cursor-pointer" />
      <div class="i-tabler-user-filled text-6 text-white cursor-pointer"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
