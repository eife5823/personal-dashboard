<template>
  <div class="search">
    <FormInput v-model="searchText" label="search" class="w-full" @enter="fetchWeather(searchText)">
      <template #prefix>
        <span class="i-tabler-search text-8 text-white min-h-7 min-w-7 cursor-pointer" />
      </template>
    </FormInput>
  </div>
</template>

<script setup lang="ts">
import { fetchWeatherKey } from '@/types/weather'

const fetchWeather = inject(fetchWeatherKey, () => Promise.reject('fetchWeather not provided'))
const searchText = ref('')
</script>

<style scoped></style>
