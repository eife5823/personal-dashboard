<template>
  <section class="weather">
    <div class="lg:(flex gap-5)">
      <div class="w-full 2xl:(w-150) xl:(w-130)">
        <Search class="mb-7" />
        <WeatherSummary
          class="h-80"
          :weather-data="weatherData"
          :weather-code="weatherMap[weatherData.current.weather_code]"
        />
      </div>
      <WeatherHighlight class="flex-1 h-90" :weather-data="weatherData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import useWeather from '@/composables/useWeather'
import { fetchWeatherKey } from '@/types/weather'

const { fetchWeather, weatherMap } = useWeather()

provide(fetchWeatherKey, fetchWeather)

const weatherStore = useWeatherStore()
const { weatherData } = storeToRefs(weatherStore)
</script>

<style scoped></style>
