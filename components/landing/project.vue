<script lang="ts" setup>
import {filename} from "pathe/utils";
import type {Project} from "~/types/project";

const props = defineProps<{
  project: Project,
}>();

const glob = import.meta.glob('@/assets/img/projects/**.png', {eager: true})
const projectsImages = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default])
);
</script>

<template>
  <div
      class="bg-gradient-to-br from-red-300 to-red-500 overflow-hidden text-white rounded-lg shadow-2xl shadow-red-400 hover:shadow-sm transition">
    <img
        v-if="props.project.images.length > 0"
        :src="projectsImages[props.project.images[0]]"
        class="object-cover h-52 w-full"
        :title="props.project.name"
        :alt="props.project.name">
    <img
        v-else
        src="/assets/img/projects/placeholder.jpg"
        class="object-cover h-52 w-full"
        :title="props.project.name"
        :alt="props.project.name">
    <section class="py-6 px-6">
      <h2 class="text-xl font-extrabold uppercase text-center">{{ props.project.name }}</h2>
      <p class="mt-3">{{ props.project.shortDescription }}</p>
    </section>
  </div>
</template>