import { $api } from '@/api'
import { WeatherTimeType, WeatherCode } from '@/types/weather'

const useWeather = () => {
  const weatherStore = useWeatherStore()
  const mainStore = useMainStore()

  const { updateWeatherData } = weatherStore
  const { toggleLoading } = mainStore
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
    [WeatherCode.RAIN_SLIGHT]: 'Rain Slight',
    [WeatherCode.RAIN_MODERATE]: 'Rain Moderate',
    [WeatherCode.RAIN_HEAVY]: 'Rain Heavy',
    [WeatherCode.FREEZING_RAIN_LIGHT]: 'Freezing Rain Light',
    [WeatherCode.FREEZING_RAIN_HEAVY]: 'Freezing Rain Heavy',
    [WeatherCode.SNOW_FALL_SLIGHT]: 'Snow Fall Slight',
    [WeatherCode.SNOW_FALL_MODERATE]: 'Snow Fall Moderate',
    [WeatherCode.SNOW_FALL_HEAVY]: 'Snow Fall Heavy',
    [WeatherCode.SNOW_GRAINS]: 'Snow Grains',
    [WeatherCode.RAIN_SHOWERS_SLIGHT]: 'Rain Showers Slight',
    [WeatherCode.RAIN_SHOWERS_MODERATE]: 'Rain Showers Moderate',
    [WeatherCode.RAIN_SHOWERS_VIOLENT]: 'Rain Showers Violent',
    [WeatherCode.SNOW_SHOWERS_SLIGHT]: 'Snow Showers Slight',
    [WeatherCode.SNOW_SHOWERS_HEAVY]: 'Snow Showers Heavy',
    [WeatherCode.THUNDERSTORM_SLIGHT]: 'Thunderstorm Slight',
    [WeatherCode.THUNDERSTORM_WITH_HAIL_SLIGHT]: 'Thunderstorm with Hail Slight',
    [WeatherCode.THUNDERSTORM_WITH_HAIL_HEAVY]: 'Thunderstorm with Hail Heavy'
  }

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
    } finally {
    }
  }

  onMounted(() => fetchWeather(defaultCity))

  return {
    weatherMap,
    fetchGeocoding,
    fetchWeather
  }
}

export default useWeather
