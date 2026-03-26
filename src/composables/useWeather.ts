import { $api } from '@/api'
import { WeatherTimeType, WeatherCode, ForecastData } from '@/types/weather'
import { getNextSevenDays } from '@/utils/tools'

const useWeather = () => {
  const weatherStore = useWeatherStore()
  const mainStore = useMainStore()

  const { updateWeatherData } = weatherStore
  const { toggleLoading } = mainStore
  const { weatherData } = storeToRefs(weatherStore)
  const { isLoading } = storeToRefs(mainStore)

  const weatherMap = {
    [WeatherCode.CLEAR_SKY]: 'Sunny',
    [WeatherCode.MAINLY_CLEAR]: 'Cloudy',
    [WeatherCode.PARTLY_CLOUDY]: 'Cloudy',
    [WeatherCode.OVERCAST]: 'Overcast',
    [WeatherCode.FOG]: 'Fog',
    [WeatherCode.DEPOSITING_RIME_FOG]: 'Depositing Rime Fog',
    [WeatherCode.DRIZZLE_LIGHT]: 'Drizzle Light',
    [WeatherCode.DRIZZLE_MODERATE]: 'Drizzle Moderate',
    [WeatherCode.DRIZZLE_DENSE]: 'Drizzle Dense',
    [WeatherCode.FREEZING_DRIZZLE_LIGHT]: 'Freezing Drizzle Light',
    [WeatherCode.FREEZING_DRIZZLE_DENSE]: 'Freezing Drizzle Dense',
    [WeatherCode.RAIN_SLIGHT]: 'Rain',
    [WeatherCode.RAIN_MODERATE]: 'Rain Moderate',
    [WeatherCode.RAIN_HEAVY]: 'Rain Heavy',
    [WeatherCode.FREEZING_RAIN_LIGHT]: 'Freezing Rain Light',
    [WeatherCode.FREEZING_RAIN_HEAVY]: 'Freezing Rain Heavy',
    [WeatherCode.SNOW_FALL_SLIGHT]: 'Snow Fall Slight',
    [WeatherCode.SNOW_FALL_MODERATE]: 'Snow Fall Moderate',
    [WeatherCode.SNOW_FALL_HEAVY]: 'Snow Fall Heavy',
    [WeatherCode.SNOW_GRAINS]: 'Snow Grains',
    [WeatherCode.RAIN_SHOWERS_SLIGHT]: 'Rain',
    [WeatherCode.RAIN_SHOWERS_MODERATE]: 'Rain Showers Moderate',
    [WeatherCode.RAIN_SHOWERS_VIOLENT]: 'Rain Showers Violent',
    [WeatherCode.SNOW_SHOWERS_SLIGHT]: 'Snow Showers Slight',
    [WeatherCode.SNOW_SHOWERS_HEAVY]: 'Snow Showers Heavy',
    [WeatherCode.THUNDERSTORM_SLIGHT]: 'Thunderstorm',
    [WeatherCode.THUNDERSTORM_WITH_HAIL_SLIGHT]: 'Thunderstorm',
    [WeatherCode.THUNDERSTORM_WITH_HAIL_HEAVY]: 'Thunderstorm'
  }

  const sevenDaysForecast = computed(() => {
    const days = getNextSevenDays()
    return days.map((date, index) => ({
      date: date,
      weatherCode: weatherMap[weatherData.value.daily.weather_code[index]],
      maxTemp: weatherData.value.daily.temperature_2m_max[index],
      minTemp: weatherData.value.daily.temperature_2m_min[index]
    }))
  })

  let fetchWeatherParams = {
    latitude: 0,
    longitude: 0,
    timezone: 'auto',
    [WeatherTimeType.HOURLY]: 'temperature_2m',
    [WeatherTimeType.DAILY]:
      'weather_code,temperature_2m_max,temperature_2m_min,sunset,sunrise,uv_index_max,wind_speed_10m_max',
    [WeatherTimeType.CURRENT]: 'temperature_2m,weather_code,relative_humidity_2m'
  }
  const defaultCity = 'taipei'

  const fetchGeocoding = async (cityName: string) => {
    const results = await $api.fetchGeocoding(cityName)
    if (!results || results.length === 0) {
      throw new Error('No geocoding results found')
    }
    const { name, latitude, longitude } = results[0]

    return { name, latitude, longitude }
  }

  const fetchWeather = async (cityName: string) => {
    try {
      const { latitude, longitude, name } = await fetchGeocoding(cityName)
      fetchWeatherParams = { ...fetchWeatherParams, latitude, longitude }
      const data = await $api.fetchWeather(fetchWeatherParams)
      updateWeatherData({ ...data, name })
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  onMounted(() => fetchWeather(defaultCity))

  return {
    weatherMap,
    weatherData,
    sevenDaysForecast,
    fetchGeocoding,
    fetchWeather
  }
}

export default useWeather
