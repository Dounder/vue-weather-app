import type { WeatherResponse } from '@/interfaces'

const getWeather = async (city: string): Promise<WeatherResponse | null> => {
  try {
    const apiUrl = import.meta.env.VITE_WEATHER_API
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY

    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    const data = await response.json()

    if (data.cod === '404') throw new Error('City not found')

    return data
  } catch (error) {
    return null
  }
}

const useWeather = () => {
  return {
    //* Props
    //! Getters
    //? Methods
    getWeather
  }
}

export default useWeather
