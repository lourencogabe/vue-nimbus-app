<template>
  <!-- Date -->
  <div>
    {{ new Date().corretnt({'en-us',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}}
  </div>
</template>
