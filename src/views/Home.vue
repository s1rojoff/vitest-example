<script setup lang="ts">
import mainRouter from '../composable/router'
const {toSection} = mainRouter()
const pages:string[] = ['Counter', 'About', 'Contact']
</script>

<template>
  <div class="px-5 pt-3">
    <p class="text-2xl font-semibold">Pages in this project</p>
    <p v-for="(item, index) in pages" :id="item" :key="index" @click="toSection(item)" class="text-lg cursor-pointer font-semibold">{{ index +1 }}. {{ item }}</p>
  </div>
</template>
