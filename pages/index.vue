<script setup lang="ts">
import Skill from "~/components/landing/skill.vue";
import Experience from "~/components/landing/experience.vue";
import Technology from "~/components/landing/technology.vue";
import Project from "~/components/landing/project.vue";
import {technologies} from "~/data/technologies";
import {projects} from "~/data/projects";
import {skills} from "~/data/skills";
import {experience} from "~/data/experience";
</script>

<template>
  <main class="w-screen bg-blue-200">
    <header
        class="h-24 fixed bg-white/30 z-50 backdrop-blur top-0 left-0 w-full bg-gradient-to-b from-white/20 to-transparent">
      <section class="mx-auto max-w-6xl h-full flex items-center justify-between">
        <NuxtLink href="/"
                  class="text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-400 to-indigo-400 inline-block text-transparent bg-clip-text">
          KARPLIUK
        </NuxtLink>
      </section>
    </header>
    <section class="h-screen bg-gradient-to-b from-indigo-100 to-blue-200">
      <section class="mx-auto max-w-6xl flex flex-col justify-center h-full">
        <section
            class="relative uppercase font-bold">
          <section class="z-0">
            <img src="/assets/img/laptop.svg"
                 class="absolute size-[500px] z-10 right-0 -top-[70%]"
                 alt="Laptop">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="size-[64px] absolute left-[50%] text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="size-[96px] absolute left-[30%] -bottom-[100%] text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="size-[64px] absolute left-[60%] -bottom-[150%] text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"/>
            </svg>
          </section>
          <section
              class="z-10 bg-gradient-to-r from-blue-600 via-red-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            <h4 class="text-5xl">Hello</h4>
            <h3 class="text-6xl">I'm Ihar Karpliuk</h3>
            <h5 class="text-4xl">Middle PHP Developer</h5>
          </section>
        </section>
        <section class="mt-10 flex gap-4">
          <a href="#"
             class="uppercase bg-blue-500 text-md font-semibold text-white rounded-lg shadow-2xl shadow-blue-400 hover:bg-blue-600 hover:shadow-sm transition py-3 px-6">
            Hire me
          </a>
          <a href="#"
             class="uppercase bg-transparent border-2 border-blue-500 text-md font-semibold text-blue-500 hover:bg-blue-500/10 rounded-lg shadow-2xl shadow-blue-400 hover:shadow-sm transition py-3 px-6">
            Download CV
          </a>
        </section>
      </section>
    </section>
    <section class="max-w-6xl mx-auto">
      <section class="py-12">
        <h4 class="text-5xl uppercase bg-gradient-to-r from-blue-600 to-blue-400 inline-block text-transparent bg-clip-text font-bold">
          My Skills
        </h4>
        <section class="mt-8 grid grid-cols-3 gap-8">
          <Skill v-for="skill in skills"
                 :skill="skill"/>
        </section>
      </section>
      <section class="py-12">
        <h4 class="text-5xl uppercase bg-gradient-to-r from-red-400 to-blue-600 inline-block text-transparent bg-clip-text font-bold">
          My Experience
        </h4>
        <section class="mt-8">
          <Experience v-for="item in experience"
                      :experience="item"/>
        </section>
      </section>
      <section class="py-12">
        <h4 class="text-5xl uppercase bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">
          Using Technologies
        </h4>
        <section class="mt-8 grid grid-cols-8 gap-8">
          <Technology v-for="technology in technologies"
                      :technology="technology"/>
        </section>
      </section>
      <section class="py-12">
        <h4 class="text-5xl uppercase bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text font-bold">
          Projects
        </h4>
        <section class="mt-8 grid grid-cols-3 gap-8">
          <Project v-for="project in projects"
                   :project="project"/>
        </section>
      </section>
    </section>
  </main>
</template>
