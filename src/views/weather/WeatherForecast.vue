<template>
  <div class="weather-forecast text-white p-6 rounded-xl flex flex-col bg-forecast lg:(p-6) xl:p-6">
    <h2 class="mb-4 flex-none">7 Days Forecast</h2>
    <div class="flex flex-1 gap-4 w-full">
      <div
        v-for="(day, index) in sevenDaysForecast"
        :key="day.date"
        class="px-4 py-5 rounded-xl bg-secondary/40 flex-1 h-100%"
      >
        <p class="mb-3 text-center">{{ index === 0 ? 'Today' : day.date }}</p>
        <TheImg :src="day.weatherCode" img-class="mb-3 lg:(h-30 w-30)" :alt="day.weatherCode" />
        <p class="text-center">{{ `${day.minTemp}°C / ${day.maxTemp}°C` }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ForecastData } from '@/types/weather'

defineProps({
  sevenDaysForecast: {
    type: Array as PropType<ForecastData[]>,
    default: () => []
  }
})
</script>

<style lang="scss" scoped></style>
