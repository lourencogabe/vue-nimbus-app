export function getTemperatureIcons(temperature: number): { icon: string; color: string } {
  if (temperature <= 10) {
    return { icon: 'fa-solid fa-snowflake', color: 'text-blue-400' }
  } else if (temperature <= 20) {
    return { icon: 'fa-solid fa-cloud', color: 'text-gray-400' }
  } else if (temperature <= 30) {
    return { icon: 'fa-solid fa-sun', color: 'text-yellow-400' }
  } else {
    return { icon: 'fa-solid fa-fire', color: 'text-red-500' }
  }
}
