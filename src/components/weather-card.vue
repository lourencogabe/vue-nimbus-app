<template>
  <div>
    <!-- search field -->
    <form @submit.prevent="fetchWeather">
      <div class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center">
        <i class="fa-solid fa-magnifying-glass p-2 text-indigo-600"></i>
        <!--V-model aguarda o que o usuário digita e armazena na variavel searchCity-->
        <input
          v-model="city"
          type="text"
          placeholder="Encontre sua cidade"
          class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
        />
      </div>
    </form>
    <!-- search suggestions -->
    <div class="bg-white my-2 rounded-lg shadow-lg">
      <div>
        <button class="px-3 my-2 hover:text-indigo-600 hover:font-bold w-full text-left"></button>
      </div>
    </div>
  </div>
  <div class="text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden">
    <!-- local e horario -->
    <div class="mb-2 flex justify-between items-center">
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <h1 class="text-3xl">{{ dataWeather?.city }}</h1>
        <h3 class="text-3xl">| {{ dataWeather?.country }}</h3>
      </div>
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-clock"></i>
        <h1 class="text-3xl">{{ formattedHour }}</h1>
      </div>
    </div>

    <!-- clima atual -->
    <div class="flex items-center justify-center gap-2">
      <!-- <i class="fa-solid fa-temperature-half"></i> -->
      <i alt="icon" width="200" :class="`${icon} text-8xl ${color}`"></i>
      <h1 class="text-9xl mb-2 ml-3.5">{{ dataWeather?.temp_c }}</h1>
    </div>
    <div class="flex items-center justify-center mt-3.5">
      <p class="text-2xl">{{ dataWeather?.humidity }}</p>
    </div>
    <BorderLine />
  </div>
</template>

<script setup lang="ts">
import { GetWeatherData } from '@/services/weather-service'
import type { WeatherResponse } from '@/types/weather-response'
import { getTemperatureIcons } from '@/utils/temperature-icon'
import { ref } from 'vue'

//constantes do tipo string
const city = ref<string>('')
const icon = ref<string>('')
const color = ref<string>('')
const dataWeather = ref<WeatherResponse | null>(null)

async function fetchWeather() {
  if (!city.value) return // Se o campo estiver vazio, não faz nada
  //Aguarda o retorno da requisição
  dataWeather.value = await GetWeatherData(city.value)
  //Converte a temperatura em inteiro
  const temp_c: number = Number(dataWeather.value?.temp_c ?? 0)
  //chama função para setar icones
  const result = getTemperatureIcons(temp_c)
  //atribui o valores do retorno
  icon.value = result.icon
  color.value = result.color
}

const formattedHour = new Date().toLocaleTimeString('pt-br', {
  hour: 'numeric',
  minute: 'numeric',
})
</script>
