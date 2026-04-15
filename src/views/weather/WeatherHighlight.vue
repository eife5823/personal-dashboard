<template>
  <div
    class="weather-highlight text-white p-6 rounded-xl bg-secondary flex flex-col lg:(p-3) xl:(px-6 py-4)"
  >
    <h2 class="mb-4 flex-none">Today's Highlight</h2>
    <div class="flex-1 gap-4 grid grid-cols-4 grid-rows-2 h-full min-h-0 lg:(gap-2) xl:gap-4">
      <div
        class="p-4 rounded-xl bg-blue-100 flex-column items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)"
      >
        <div class="2xl:() flex gap-2 items-center lg:(text-4) xl:(text-5)">
          <span class="i-tabler-wind text-white" />
          <p>Wind Status</p>
        </div>
        <h3 class="text-right">
          {{ `${weatherData.daily.wind_speed_10m_max[0] ?? 0} ` }}<span class="text-4">km/h</span>
        </h3>
      </div>
      <div
        class="p-4 rounded-xl bg-blue-100 flex-column gap-3 items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)"
      >
        <div class="flex gap-2 items-center lg:(text-4) xl:(text-5)">
          <span class="i-tabler-droplet-filled-2 text-white" />
          <p>Humidity</p>
        </div>
        <h3 class="text-right">
          {{ `${weatherData.current.relative_humidity_2m ?? 0} ` }}<span class="text-4">%</span>
        </h3>
      </div>
      <div class="rounded-xl bg-blue-100 flex-space-between col-span-2 lg:(p-4) xl:(px-6 py-7)">
        <img src="@/assets/images/sunrise.webp" width="80" height="80" alt="" />
        <div class="w-35">
          <p class="text-6">Sunrise</p>
          <h2>{{ useDateFormat(weatherData.daily.sunrise[0], 'H:mm A') }}</h2>
        </div>
      </div>
      <div
        class="p-4 rounded-xl bg-blue-100 flex-column gap-3 items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)"
      >
        <div class="flex gap-2 items-center lg:(text-4) xl:(text-5)">
          <span class="i-tabler-uv-index text-white" />
          <p>UV Index</p>
        </div>
        <h3 class="text-right">
          {{ `${weatherData.daily.uv_index_max[0] ?? 0} ` }}<span class="text-4">UV</span>
        </h3>
      </div>
      <div
        class="p-4 rounded-xl bg-blue-100 flex-column gap-3 items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)"
      >
        <div class="flex gap-2 items-center lg:(text-4) xl:(text-5)">
          <span class="i-tabler-uv-index text-white" />
          <p>UV Index</p>
        </div>
        <h3 class="text-right">
          {{ `${weatherData.daily.uv_index_max[0] ?? 0} ` }}<span class="text-4">UV</span>
        </h3>
      </div>
      <div class="rounded-xl bg-blue-100 flex-space-between col-span-2 lg:(p-4) xl:(px-6 py-7)">
        <img src="@/assets/images/sunset.webp" width="80" height="80" alt="" />
        <div class="w-35">
          <p class="text-6">Sunset</p>
          <h2>{{ useDateFormat(weatherData.daily.sunset[0], 'H:mm A') }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'
import { WeatherData } from '@/types/weather'

defineProps({
  weatherData: {
    type: Object as PropType<WeatherData>,
    default: () => ({})
  },
  weatherCode: {
    type: String,
    default: ''
  }
})

const currentTime = computed(() => {
  const now = useNow()
  return useDateFormat(now, 'H:m A')
})
</script>

<style scoped></style>
