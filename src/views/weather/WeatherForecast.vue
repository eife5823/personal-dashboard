<template>
  <div
    class="weather-forecast text-white p-6 rounded-xl flex flex-col bg-forecast lg:(p-6) xl:(px-6 py-4)"
  >
    <h2 class="mb-4 flex-none">7 Days Forecast</h2>
    <div class="flex flex-1 gap-4 w-full overflow-scroll">
      <div
        v-for="(day, index) in sevenDaysForecast"
        :key="day.date"
        class="px-4 py-5 rounded-xl bg-secondary/40 flex-1 min-h-70 min-w-40"
      >
        <p class="text-5 mb-4 text-center">{{ index === 0 ? 'Today' : day.date }}</p>
        <TheImg :src="day.weatherCode" img-class="mb-7 lg:(h-25 w-25)" :alt="day.weatherCode" />
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
