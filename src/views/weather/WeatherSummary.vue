<template>
  <div class="weather-summary p-6 rounded-xl bg-secondary flex-column lg:p-4 xl:p-6">
    <div class="flex-space-between">
      <div class="flex-center">
        <span
          class="text-8 text-purple-100 mr-3 cursor-pointer"
          :class="favoriteIcon"
          @click="toggleFavorite(weatherData)"
        />
        <div class="text-white px-3 rounded-2xl bg-purple-100 flex-center gap-1 h-10 min-w-30">
          <span class="i-tabler-map-pin-filled text-6 text-white cursor-pointer" />
          <span class="text-5">{{ weatherData?.name }}</span>
        </div>
      </div>
      <Toggle class="h-10 w-20" />
    </div>
    <div class="text-white mt-8 flex-space-between flex-1">
      <div class="left flex-column gap-8">
        <div class="date">
          <h1 class="lg:(text-7 font-bold)">{{ weekday }}</h1>
          <span class="opacity-70">{{ date }}</span>
        </div>
        <div class="temprature">
          <h1 class="lg:(text-7 font-bold)">{{ weatherData?.current.temperature_2m }}°C</h1>
          <span class="opacity-70"
            >High: {{ weatherData?.daily.temperature_2m_max[0] }}°C Low:
            {{ weatherData?.daily.temperature_2m_min[0] }}°C</span
          >
        </div>
      </div>
      <div class="right flex-column gap-1 items-center">
        <TheImg :src="weatherCode" img-class="lg:(h-30 w-30)" :alt="weatherCode" />
        <h3 class="capitalize lg:text-5 xl:text-6">{{ weatherCodeName }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'
import { WeatherData, FavoriteLocation } from '@/types/weather'

const props = defineProps({
  weatherData: {
    type: Object as PropType<WeatherData>,
    default: () => ({})
  },
  weatherCode: {
    type: String,
    default: ''
  },
  weatherCodeName: {
    type: String,
    default: ''
  },
  favorites: {
    type: Array as PropType<FavoriteLocation[]>,
    required: true
  }
})

const emit = defineEmits(['toggleFavorite'])
const now = useNow()
const weekday = useDateFormat(now, 'dddd', {
  locales: 'en-US'
})
const date = useDateFormat(now, 'DD MMM, YYYY', {
  locales: 'en-US'
})
const favoriteIcon = computed(() =>
  props.favorites.some(location => location.cityName === props.weatherData.name)
    ? 'i-tabler-star-filled'
    : 'i-tabler-star'
)
const toggleFavorite = (data: WeatherData) => emit('toggleFavorite', data)
</script>

<style scoped></style>
