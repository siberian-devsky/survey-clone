import { NextResponse } from "next/server"
import { getAllCities } from "@/lib/cities"
import { CityData, WeatherDisplayData } from "@/types/index"
import { buildWeatherUrl } from "@/lib/url-builder"

export async function GET() {
    try {
        const apiKey = process.env.WEATHER_API_KEY
        
        if (!apiKey) {
            return NextResponse.json(
                { message: "Weather API key not configured" },
                { status: 500 }
            )
        }

        const cities: CityData[] = getAllCities()
        
        // Use Promise.all to wait for all async operations
        const weatherPromises = cities.map(async (city) => {
            const lat = city.lat
            const lon = city.lon
            const url = buildWeatherUrl( {lat, lon, apiKey })
            
            try {
                const response = await fetch(url)
                
                if (!response.ok) {
                    return {
                        cityId: city.id,
                        city: city.city,
                        error: `Weather API error: ${response.status}`,
                        weatherData: null
                    }
                }
                
                // take only what we need to survive
                const weatherData = await response.json()
                // console.log(weatherData)
                const temp = weatherData.current.temp
                const iconId = weatherData.current.weather[0].icon

                return {
                    cityId: city.id,
                    error: null,
                    display: {
                        city: city.city,
                        temp: temp,
                        icon: iconId
                    } satisfies WeatherDisplayData
                }
            } catch (fetchError) {
                return {
                    cityId: city.id,
                    city: city.city,
                    error: fetchError,
                    weatherData: null
                }
            }
        })

        // Wait for all weather requests to complete
        const weatherResults = await Promise.all(weatherPromises)
        
        return NextResponse.json({
            weather: weatherResults
        }, { status: 200 })
        
    } catch (err) {
        console.error('API Error:', err)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}