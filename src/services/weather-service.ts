import type { WeatherResponse } from '@/types/weather-response'
import axios from 'axios'

export async function GetWeatherData(cidade: string) {
  try {
    //Seto meu axios para que a resposta tenha o tipo da minha interface
    const response = await axios.get<WeatherResponse>('http://localhost:8080/get/' + cidade)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados de clima', error)
    throw error
  }
}
