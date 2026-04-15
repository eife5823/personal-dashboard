import { axiosInstance } from './index'
import { GeocodingResult, FetchWeatherParams, WeatherData, FavoriteLocation } from '@/types/weather'

const weatherApi = {
  async searchLocation(name: string): Promise<GeocodingResult['results']> {
    const res = await axiosInstance.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`
    )
    return res.data.results
  },
  async fetchWeather(params: FetchWeatherParams): Promise<WeatherData> {
    const res = await axiosInstance.get('https://api.open-meteo.com/v1/forecast', { params })
    return res.data
  },
  async fetchFavorites(): Promise<FavoriteLocation[]> {
    const res = await axiosInstance.get('http://localhost:3000/api/favorites')
    return res.data
  },
  async addFavorite(location: FavoriteLocation): Promise<FavoriteLocation[]> {
    const res = await axiosInstance.post('http://localhost:3000/api/favorites', location)
    return res.data
  },
  async deleteFavorite(location: string) {
    const res = await axiosInstance.delete(`http://localhost:3000/api/favorites/${location}`)
    return res.data
  }
}

export default weatherApi
