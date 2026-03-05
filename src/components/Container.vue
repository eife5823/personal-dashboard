<template>
  <section class="flex w-full h-full bg-primary">
    <Aside class="h-full" />
    <div class="flex flex-col w-full h-full">
      <Header />
      <router-view class="flex-1 px-6 py-5" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
