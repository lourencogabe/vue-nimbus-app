<template>
  <!-- Data -->
  <div class="text-center mb-6">
    {{ formattedData }}
  </div>
  <!-- Cartão metereológico -->
  <div>
    <weatherCard />
  </div>
</template>

<script setup lang="ts">
//Método para formatar a data
const formattedData = new Date().toLocaleDateString('pt-br', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

//Importa o componente de busca
import weatherCard from './components/weather-card.vue'
</script>
