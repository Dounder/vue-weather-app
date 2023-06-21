<script setup lang="ts">
import { BackgroundImg, SearchBar, WeatherData } from '@/components'
import { ref } from 'vue'
import type { ReqStatus, WeatherResponse } from './interfaces'

const weather = ref<WeatherResponse | null>(null)
const status = ref<ReqStatus>('idle')

const handleEnter = (res: WeatherResponse | null) => {
  if (!res) return (status.value = 'error')

  status.value = 'success'
  weather.value = res
}
</script>

<template>
  <main>
    <SearchBar @on:enter="handleEnter" />
    <BackgroundImg :temp="weather?.main.temp" />
    <WeatherData :weather="weather" :status="status" />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

main {
  min-height: 100vh;
  padding: 2rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>
