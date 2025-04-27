<template>
  <div class="text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden">
    <!-- local e horario -->
    <div class="mb-2 flex justify-between items-center">
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <h1 class="text-3xl">[cidade]</h1>
      </div>
      <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-clock"></i>
        <h1 class="text-3xl">[hora local]</h1>
      </div>
    </div>

    <!-- clima atual -->
    <div class="flex items-center justify-center gap-2">
      <!-- <i class="fa-solid fa-temperature-half"></i> -->
      <i alt="icon" width="200" :class="`${icon} text-8xl`"></i>
      <h1 class="text-9xl mb-2 ml-3.5">25</h1>
    </div>
    <div class="flex items-center justify-center mt-3.5">
      <p class="text-2xl">CONDICION</p>
    </div>
    <BorderLine />
  </div>
</template>

<script setup lang="ts">
import { getTemperatureIcons } from '@/utils/temperature-icon'

const icon = getTemperatureIcons(1)
</script>
