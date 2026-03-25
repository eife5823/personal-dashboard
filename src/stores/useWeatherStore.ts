import { WeatherData } from '@/types/weather'

export default defineStore('weather', () => {
  const defaultWeatherData = {
    name: '',
    latitude: 0,
    longitude: 0,
    timezone: 'auto',
    current: {
      weather_code: 0,
      temperature_2m: 0,
      relative_humidity_2m: 0
    },
    hourly: {
      temperature_2m: []
    },
    daily: {
      weather_code: [],
      temperature_2m_max: [],
      temperature_2m_min: [],
      sunset: [],
      sunrise: [],
      uv_index_max: [],
      wind_speed_10m_max: []
    }
  }
  const weatherData = ref<WeatherData>(defaultWeatherData)

  const updateWeatherData = (data: WeatherData) => {
    weatherData.value = { ...data }
  }

  return {
    weatherData,
    updateWeatherData
  }
})
