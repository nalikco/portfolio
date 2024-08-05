<script lang="ts" setup>
import type {Experience} from "~/types/experience";

const props = defineProps<{
  experience: Experience,
}>();
</script>

<template>
  <div class="relative border-l-2 border-red-500 pt-8">
    <div class="absolute size-4 bg-red-500 rounded-full -left-2 top-10"/>
    <section
        class="ml-8 w-max bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg py-3 px-6 shadow-2xl shadow-red-400 hover:shadow-sm transition">
      <h4 class="font-medium"><span class="text-white/60">from</span> {{ props.experience.from }}</h4>
      <h2 class="text-3xl font-extrabold bg-gradient-to-r from-red-100 to-red-50 inline-block text-transparent bg-clip-text uppercase">
        {{ props.experience.position }}</h2>
      <h3 class="text-xl font-medium"><span class="text-white/60">at</span> {{ props.experience.company }}</h3>
    </section>
  </div>
</template>