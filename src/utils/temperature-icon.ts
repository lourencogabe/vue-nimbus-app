export function getTemperatureIcons(temperature: number): string {
  if (temperature <= 10) {
    return 'fa-solid fa-snowflake'
  } else if (temperature <= 20) {
    return 'fa-solid fa-cloud'
  } else if (temperature <= 30) {
    return 'fa-solid fa-sun'
  } else {
    return 'fa-solid fa-fire'
  }
}
