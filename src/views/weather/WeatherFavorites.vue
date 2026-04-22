<template>
  <div class="weather-favorites text-white px-6 pt-4 rounded-xl bg-favorites">
    <h2 class="mb-4">Pinned Cities</h2>
    <div v-if="favorites.length">
      <div
        v-for="favorite in favorites"
        :key="favorite.cityName"
        class="mb-4 p-4 rounded-xl bg-secondary flex-space-between cursor-pointer"
        @click="fetchWeather(favorite.cityName)"
      >
        <div class="flex-column">
          <div class="flex items-center">
            <span
              class="i-tabler-star-filled text-8 text-purple-100 mr-3 cursor-pointer"
              @click="toggleFavorite(favorite)"
            />
            <span class="text-8">{{ getFlagIcon(favorite.countryCode) }}</span>
          </div>
          <h3>{{ favorite.cityName }}</h3>
          <span class="text-5">{{ favorite.weatherCode }}</span>
        </div>
        <TheImg :src="favorite.weatherCode" img-class="mb-3 lg:(h-25 w-25)" alt="sunny" />
        <div>
          <span class="text-6 text-white font-bold">{{ favorite.maxTemp }} /</span>
          <span class="text-white/50">{{ favorite.minTemp }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No pinned cities yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FavoriteLocation, fetchWeatherKey } from '@/types/weather'

defineProps({
  favorites: {
    type: Array as PropType<FavoriteLocation[]>,
    required: true
  }
})
const emit = defineEmits(['toggleFavorite'])

const fetchWeather = inject(fetchWeatherKey, () => Promise.reject('fetchWeather not provided'))

const toggleFavorite = (data: FavoriteLocation) => emit('toggleFavorite', data)

const getFlagIcon = (code: string) => {
  return code.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
}
</script>

<style scoped></style>
