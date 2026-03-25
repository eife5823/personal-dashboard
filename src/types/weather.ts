type FetchWeatherFn = (cityName: string) => Promise<any>;

export const fetchWeatherKey: InjectionKey<FetchWeatherFn> = Symbol('fetchWeather')

export interface GeocodingResultData {
  id: number
  name: string
  latitude: number
  longitude: number
  country_code: string
  timezone: string
  country: string
}
export interface GeocodingResult {
  results: GeocodingResultData[]
}
export enum WeatherCode {
  CLEAR_SKY = 0,
  MAINLY_CLEAR = 1,
  PARTLY_CLOUDY = 2,
  OVERCAST = 3,
  FOG = 45,
  DEPOSITING_RIME_FOG = 48,
  DRIZZLE_LIGHT = 51,
  DRIZZLE_MODERATE = 53,
  DRIZZLE_DENSE = 55,
  FREEZING_DRIZZLE_LIGHT = 56,
  FREEZING_DRIZZLE_DENSE = 57,
  RAIN_SLIGHT = 61,
  RAIN_MODERATE = 63,
  RAIN_HEAVY = 65,
  FREEZING_RAIN_LIGHT = 66,
  FREEZING_RAIN_HEAVY = 67,
  SNOW_FALL_SLIGHT = 71,
  SNOW_FALL_MODERATE = 73,
  SNOW_FALL_HEAVY = 75,
  SNOW_GRAINS = 77,
  RAIN_SHOWERS_SLIGHT = 80,
  RAIN_SHOWERS_MODERATE = 81,
  RAIN_SHOWERS_VIOLENT = 82,
  SNOW_SHOWERS_SLIGHT = 85,
  SNOW_SHOWERS_HEAVY = 86,
  THUNDERSTORM_SLIGHT = 95,
  THUNDERSTORM_WITH_HAIL_SLIGHT = 96,
  THUNDERSTORM_WITH_HAIL_HEAVY = 99
}
export enum WeatherTimeType {
  HOURLY = 'hourly',
  DAILY = 'daily',
  CURRENT = 'current'
}
export interface FetchWeatherParams {
  latitude: number
  longitude: number
  [WeatherTimeType.HOURLY]?: string
  [WeatherTimeType.DAILY]?: string
  [WeatherTimeType.CURRENT]?: string
}
export interface WeatherData {
  name: string
  latitude: number
  longitude: number
  timezone: string
  current: {
    weather_code: WeatherCode
    temperature_2m: number
    relative_humidity_2m: number
  },
  daily: {
    weather_code: WeatherCode[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    sunset: string[]
    sunrise: string[]
    uv_index_max: number[]
    wind_speed_10m_max: number[]
  }
}
