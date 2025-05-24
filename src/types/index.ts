export interface CityData {
  id?: number
  city: string
  cityPop: number
  country?: string
  countryPop?: number
  state?: string
  statePop?: number
  lat: number
  lon: number
}

export interface WeatherDisplayData {
  city: string
  temp: number
  icon: string
}

export interface WeatherRawData {
  cityId?: number,
  city: string,
  error: null,
  weatherData: object
}

export interface WeatherApiUrlParams {
  lat: number
  lon: number
  apiKey: string
}

export type SquareData = {
  id: number
  display: WeatherDisplayData
}

export type MenuProps = {
  visible: boolean
  resetCallback: () => void
  menuLockCallback: () => void
  menuUnlockCallback: () => void
}