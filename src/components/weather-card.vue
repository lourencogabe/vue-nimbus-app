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
    <div class="text-center flex-1">
      <img src="" alt="icon" width="200" class="mx-auto -mb-10" />
      <h1 class="text-9xl mb-2">[temperatura]</h1>
      <p class="text-2xl">[condição]</p>
    </div>

    <BorderLine />

    <div class="flex justify-end items-center gap-1 mt-10">
      <button>More <i class="fa-solid fa-arrow-right text-sm -mb-px"></i></button>
    </div>
  </div>
</template>
