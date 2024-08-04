<script lang="ts" setup>
const props = defineProps<{
  from: string,
  position: string,
  company: string,
}>();
</script>

<template>
  <div class="relative border-l-2 border-blue-500 pt-8">
    <div class="absolute size-4 bg-blue-500 rounded-full -left-2 top-10"/>
    <section
        class="ml-8 w-max bg-gradient-to-r from-blue-600 to-indigo-400 text-white rounded-lg py-3 px-6 shadow-2xl shadow-blue-400 hover:shadow-sm transition">
      <h4 class="font-medium"><span class="text-white/60">from</span> {{ props.from }}</h4>
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-100 to-indigo-100 inline-block text-transparent bg-clip-text uppercase">
        {{ props.position }}</h2>
      <h3 class="text-xl font-medium"><span class="text-white/60">at</span> {{ props.company }}</h3>
    </section>
  </div>
</template>