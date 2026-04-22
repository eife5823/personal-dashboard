<template>
  <section class="weather flex-column gap-5">
    <div class="lg:(flex gap-5)">
      <div class="flex-column flex-1 gap-5 w-full">
        <Search />
        <WeatherSummary
          :weather-data="weatherData"
          :weather-code="weatherCodeMap[weatherData.current.weather_code]"
          :weather-code-name="getWeatherCodeName(weatherData.current.weather_code)"
          :favorites="favorites"
          @toggle-favorite="toggleFavorite($event)"
        />
        <WeatherFavorites
          class="flex-1"
          :favorites="favorites"
          @toggle-favorite="toggleFavorite($event)"
        />
      </div>
      <div class="max-w-220">
        <WeatherHighlight class="mb-5" :weather-data="weatherData" />
        <WeatherForecast :seven-days-forecast="sevenDaysForecast" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useWeather from '@/composables/useWeather'
import { fetchWeatherKey } from '@/types/weather'

const {
  weatherCodeMap,
  weatherData,
  sevenDaysForecast,
  favorites,
  fetchWeather,
  getWeatherCodeName,
  toggleFavorite
} = useWeather()

provide(fetchWeatherKey, fetchWeather)
</script>

<style scoped></style>
