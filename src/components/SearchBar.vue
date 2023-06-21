<script setup lang="ts">
import { ref } from 'vue'

import { useWeather } from '@/composables'
import type { WeatherResponse } from '@/interfaces'

interface Emits {
  (e: 'on:enter', query: WeatherResponse | null): void
}

const emits = defineEmits<Emits>()
const { getWeather } = useWeather()
const query = ref('guatemala')
const loading = ref(false)

const onEnter = async () => {
  if (query.value === '') return

  loading.value = true

  const weather = await getWeather(query.value)

  emits('on:enter', weather)

  loading.value = false
}
</script>

<template>
  <article class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      placeholder="Search city..."
      v-model="query"
      @keyup.enter="onEnter"
      :disabled="loading"
    />
  </article>
</template>

<style scoped>
.search-bar {
  width: 100%;
  margin-bottom: 3rem;
}

.search-bar .search-bar__input {
  width: 100%;
  display: block;
  padding: 0.8rem;
  color: #313131;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

.search-bar .search-bar__input:focus {
  transition: all 0.5s ease-in-out;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.8rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}
</style>
