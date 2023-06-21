<script setup lang="ts">
import { type ReqStatus, type WeatherResponse } from '@/interfaces'

interface Props {
  weather: WeatherResponse | null
  status?: ReqStatus
}

withDefaults(defineProps<Props>(), {
  weather: null,
  status: 'idle'
})

const getDate = () =>
  new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
</script>

<template>
  <article class="weather" v-if="status !== 'idle'">
    <template v-if="weather && status === 'success'">
      <section class="location">
        <p class="city">{{ weather.name }}, {{ weather.sys.country }}</p>
        <p class="date">{{ getDate() }}</p>
      </section>
      <section class="data">
        <p class="temp">{{ Math.round(weather.main.temp) }}°C</p>
        <p class="status">{{ weather.weather[0].main }}</p>
      </section>
    </template>
  </article>

  <article class="weather" v-if="status === 'error'">
    <section class="location">
      <p class="city">City not found</p>
    </section>
  </article>
</template>

<style scoped>
.weather,
.data {
  color: whitesmoke;
  text-align: center;
}
.city {
  font-size: 2rem;
  font-size: 500;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.2);
}

.date {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-size: 200;
  font-style: italic;
  text-align: center;
}

.temp {
  display: inline-block;
  font-size: 6rem;
  font-size: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 0.6rem 1.5rem;
  border-radius: 1rem;
  margin: 2rem 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
}

.status {
  font-size: 4rem;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.2);
}
</style>
