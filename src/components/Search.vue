<template>
  <div class="search">
    <FormInput
      label="search"
      class="w-full"
      :model-value="searchText"
      @update:model-value="searchText = $event"
      @enter="fetchWeather(searchText)"
    >
      <template #prefix>
        <div class="i-tabler-search text-8 text-white min-h-7 min-w-7 cursor-pointer" />
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
