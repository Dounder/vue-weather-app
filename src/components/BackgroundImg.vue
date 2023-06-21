<script setup lang="ts">
interface Props {
  temp?: number
}

withDefaults(defineProps<Props>(), {
  temp: 0
})
</script>

<template>
  <img class="bg" :src="temp > 16 ? 'src/assets/warm.png' : 'src/assets/cold.png'" alt="" />
</template>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: all 0.5s ease-in-out;
}
</style>
