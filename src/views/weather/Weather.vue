<template>
  <section class="weather flex-column">
    <div class="lg:(flex gap-5)">
      <div class="mb-6 w-full 2xl:(w-150) lg:(w-90) xl:(w-130)">
        <Search class="mb-7" />
        <WeatherSummary
          class="h-80"
          :weather-data="weatherData"
          :weather-code="weatherMap[weatherData.current.weather_code]"
        />
      </div>
      <WeatherHighlight class="flex-1 h-90" :weather-data="weatherData" />
    </div>
    <WeatherForecast class="flex-1" />
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
