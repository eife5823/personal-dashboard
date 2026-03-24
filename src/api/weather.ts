import { axiosInstance } from './index'
import { GeocodingResult, FetchWeatherParams, WeatherData } from '@/types/weather'

const weatherApi = {
  async fetchGeocoding(name: string): Promise<GeocodingResult['results']> {
    const res = await axiosInstance.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`
    )
    return res.data.results
  },
  async fetchWeather(params: FetchWeatherParams): Promise<WeatherData> {
    const res = await axiosInstance.get('https://api.open-meteo.com/v1/forecast', { params })
    return res.data
  }
}

export default weatherApi
