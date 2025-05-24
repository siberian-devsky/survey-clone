import type { WeatherApiUrlParams } from "@/types"

export const buildWeatherUrl = ({ lat, lon, apiKey }: WeatherApiUrlParams): string => {
  return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude='minutely,hourly,daily,alerts'&appid=${apiKey}`;
};

export const buildWeatherIconUrl = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}