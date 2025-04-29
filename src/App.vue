<template>
  <div class="min-h-screen flex flex-col">
    <!-- Conteúdo principal -->
    <div>
      <!-- Data -->
      <div class="text-center mb-10 text-white">
        {{ formattedData }}
      </div>
      <!-- Cartão meteorológico -->
      <div>
        <weatherCard />
      </div>
    </div>
    <footer
      class="w-full border-t text-white text-sm font-light py-4 px-6 flex flex-col items-center mt-10"
    >
      <p class="mb-1">&copy; 2025 Nimbus</p>
      <p class="text-white">
        Desenvolvido com ❤️ por
        <a
          href="https://github.com/lourencogabe"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          lourencogabo
        </a>
      </p>
    </footer>
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
