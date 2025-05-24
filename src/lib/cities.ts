import citiesData from '../data/cities.json'
import type { CityData } from '@/types'

export const cities: CityData[] = citiesData.world.cities

export const getAllCities = (): CityData[] => {
    return cities
}

export const getCityById = ( id: number ): CityData | undefined => {
    return cities.find( city =>  city.id === id )
}

export const getCoordinatesByCity = ( name: string ): number[] | string => { 
    const city = cities.find( city => city.city === name )

    if (city) {
        return [city.lat, city.lon]
    } else {
        return 'City name not found'
    }
}