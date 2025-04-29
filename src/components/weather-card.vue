<template>
  <!-- search field -->
  <form @submit.prevent="fetchWeather">
    <div class="bg-[#353b45] rounded-lg shadow-lg flex items-center">
      <i class="fa-solid fa-magnifying-glass p-2 text-blue-400"></i>
      <!--V-model aguarda o que o usuário digita e armazena na variavel searchCity-->
      <input
        v-model="city"
        type="text"
        placeholder="Encontre sua cidade"
        class="text-white rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:to-white ring-inset w-full"
      />
    </div>
  </form>
  <div
    class="text-white bg-[#353b45] p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden mt-10"
  >
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
      <i alt="icon" width="200" :class="`${icon} text-8xl mt-30 mr-5 ${color}`"></i>
      <h1 class="text-9xl mb-2 mt-30">{{ dataWeather?.temp_c }}°</h1>
    </div>
    <div class="flex items-center justify-center mt-30">
      <p class="text-2xl">Humidade: {{ dataWeather?.humidity }}%</p>
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
