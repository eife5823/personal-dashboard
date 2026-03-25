<template>
  <div class="weather-forecast bg-forecast text-white p-6 rounded-xl flex flex-col lg:(p-3) xl:p-6">
    <h2 class="mb-4 flex-none">7 Days Forecast</h2>
    <div class="p-4 flex gap-2 w-full">
      <div v-for="item in 7" :key="item" class="flex-1 h-50">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
