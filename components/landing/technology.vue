<script lang="ts" setup>
import {filename} from "pathe/utils";

const props = defineProps<{
  image: string,
  name: string,
  url: string,
}>();

const glob = import.meta.glob('@/assets/img/technologies/**.svg', {eager: true})
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default])
);
</script>

<template>
  <a :href="props.url"
     target="_blank">
    <img :src="images[props.image]"
         class="size-16"
         :title="props.name"
         :alt="props.name">
  </a>
</template>