<script lang="ts" setup>
import {filename} from "pathe/utils";
import type {Technology} from "~/types/technology";

const props = defineProps<{
  technology: Technology,
}>();

const glob = import.meta.glob('@/assets/img/technologies/**.svg', {eager: true})
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default])
);
</script>

<template>
  <a :href="props.technology.url"
     class="hover:scale-125 flex items-center justify-center transition"
     target="_blank">
    <img :src="images[props.technology.image]"
         class="size-16"
         :title="props.technology.name"
         :alt="props.technology.name">
  </a>
</template>