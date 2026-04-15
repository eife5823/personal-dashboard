import { WeatherCode } from '@/types/weather'

export interface FavoriteLocation {
  cityName: string
  latitude: number
  longitude: number
  weatherCode: WeatherCode
  countryCode: string
  maxTemp: number
  minTemp: number
}
