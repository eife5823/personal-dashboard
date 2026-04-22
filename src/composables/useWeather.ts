import { $api } from '@/api'
import {
  WeatherTimeType,
  WeatherCode,
  ForecastData,
  WeatherData,
  FavoriteLocation
} from '@/types/weather'
import { getNextSevenDays } from '@/utils/tools'

const useWeather = () => {
  const weatherStore = useWeatherStore()
  const mainStore = useMainStore()

  const { updateWeatherData, updateFavorites } = weatherStore
  const { weatherData, favorites } = storeToRefs(weatherStore)
  const { isLoading } = storeToRefs(mainStore)

  const weatherCodeMap = {
    [WeatherCode.CLEAR_SKY]: 'sunny',
    [WeatherCode.MAINLY_CLEAR]: 'cloudy',
    [WeatherCode.PARTLY_CLOUDY]: 'cloudy',
    [WeatherCode.OVERCAST]: 'overcast',
    [WeatherCode.FOG]: 'fog',
    [WeatherCode.DEPOSITING_RIME_FOG]: 'fog',
    [WeatherCode.DRIZZLE_LIGHT]: 'Drizzle Light',
    [WeatherCode.DRIZZLE_MODERATE]: 'Drizzle Moderate',
    [WeatherCode.DRIZZLE_DENSE]: 'Drizzle Dense',
    [WeatherCode.FREEZING_DRIZZLE_LIGHT]: 'Freezing Drizzle Light',
    [WeatherCode.FREEZING_DRIZZLE_DENSE]: 'Freezing Drizzle Dense',
    [WeatherCode.RAIN_SLIGHT]: 'rain-light',
    [WeatherCode.RAIN_MODERATE]: 'rain',
    [WeatherCode.RAIN_HEAVY]: 'rain',
    [WeatherCode.FREEZING_RAIN_LIGHT]: 'Freezing Rain Light',
    [WeatherCode.FREEZING_RAIN_HEAVY]: 'Freezing Rain Heavy',
    [WeatherCode.SNOW_FALL_SLIGHT]: 'Snow Fall Slight',
    [WeatherCode.SNOW_FALL_MODERATE]: 'Snow Fall Moderate',
    [WeatherCode.SNOW_FALL_HEAVY]: 'Snow Fall Heavy',
    [WeatherCode.SNOW_GRAINS]: 'Snow Grains',
    [WeatherCode.RAIN_SHOWERS_SLIGHT]: 'rain-light',
    [WeatherCode.RAIN_SHOWERS_MODERATE]: 'rain',
    [WeatherCode.RAIN_SHOWERS_VIOLENT]: 'rain',
    [WeatherCode.SNOW_SHOWERS_SLIGHT]: 'Snow Showers Slight',
    [WeatherCode.SNOW_SHOWERS_HEAVY]: 'Snow Showers Heavy',
    [WeatherCode.THUNDERSTORM_SLIGHT]: 'thunderstorm',
    [WeatherCode.THUNDERSTORM_WITH_HAIL_SLIGHT]: 'thunderstorm',
    [WeatherCode.THUNDERSTORM_WITH_HAIL_HEAVY]: 'thunderstorm'
  }

  const sevenDaysForecast = computed(() => {
    const days = getNextSevenDays()
    return days.map((date, index) => ({
      date: date,
      weatherCode: weatherCodeMap[weatherData.value.daily.weather_code[index]],
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
    const results = await $api.searchLocation(cityName)
    if (!results || results.length === 0) {
      throw new Error('No geocoding results found')
    }
    const { name, latitude, longitude, country_code } = results[0]

    return { name, latitude, longitude, country_code }
  }

  const fetchWeather = async (cityName: string) => {
    try {
      const { latitude, longitude, name, country_code } = await fetchGeocoding(cityName)
      fetchWeatherParams = { ...fetchWeatherParams, latitude, longitude }
      const data = await $api.fetchWeather(fetchWeatherParams)
      updateWeatherData({ ...data, name, country_code })
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  const fetchFavorites = async () => {
    try {
      const data = await $api.fetchFavorites()
      updateFavorites(data)
    } catch (error) {
      console.error('Error fetching favorites data:', error)
    }
  }

  const toggleFavorite = async (data: FavoriteLocation) => {
    const { cityName, countryCode, latitude, longitude, weatherCode, maxTemp, minTemp } = data
    const params = {
      cityName,
      latitude,
      longitude,
      countryCode,
      weatherCode,
      maxTemp,
      minTemp
    }
    try {
      const isPinned = favorites.value.some(location => location.cityName === cityName)
      if (isPinned) {
        await $api.deleteFavorite(cityName)
      } else {
        if (favorites.value.length >= 2) {
          alert('You can only add up to 2 favorite locations.')
          return
        }
        await $api.addFavorite(params)
      }
      await fetchFavorites()
    } catch (error) {
      console.error('Error update favorites data:', error)
    }
  }

  const getWeatherCodeName = (code: WeatherCode) => {
    const nameArr = weatherCodeMap[code].split('-')
    if (nameArr.length === 1) return nameArr[0]
    return `${nameArr[0]} ${nameArr[0]}`
  }

  onMounted(() => {
    fetchWeather(defaultCity)
    fetchFavorites()
  })

  return {
    weatherCodeMap,
    weatherData,
    sevenDaysForecast,
    favorites,
    fetchGeocoding,
    fetchWeather,
    fetchFavorites,
    toggleFavorite,
    getWeatherCodeName
  }
}

export default useWeather
