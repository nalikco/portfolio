<script lang="ts" setup>
import { filename } from 'pathe/utils'

const props = defineProps<{
  name: string,
  image: string,
  percentage: number,
}>();

const glob = import.meta.glob('@/assets/img/technologies/*.svg', { eager: true })
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default])
)
</script>

<template>
  <div
     class="uppercase bg-blue-500 overflow-hidden text-md font-semibold text-white rounded-lg shadow-2xl shadow-blue-400 hover:bg-blue-600 hover:shadow-sm transition">
    <section class="py-8 flex items-center justify-center">
      <img :src="images[props.image]"
           class="h-20"
           :alt="props.name">
    </section>
    <section class="relative bg-blue-400/50 h-16">
      <div class="absolute z-0 h-full bg-blue-700" :style="`width: ${props.percentage}%;`" />
      <div class="absolute z-10 text-white w-full h-full text-5xl font-bold flex justify-center items-center">
        <span>{{ props.percentage }}%</span>
      </div>
    </section>
  </div>
</template>