<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
import { useCounter } from "../../composable/counter";
const { incrFunc, resetFunc, decrFunc, count } = useCounter();
</script>
<template>
  <div class="flex justify-center mt-5">
    <div class="w-1/3 bg-slate-100 rounded h-auto px-8 py-5">
      <p class="text-3xl font-bold px-10">Current count: {{ count }}</p>
      <div class="flex justify-between px-10 pt-5">
        <BaseButton type="increment" class="bg-red-500 hover:bg-red-600" @click="incrFunc"
          >increment</BaseButton
        >
        <BaseButton type="reset" class="bg-green-500 hover:bg-green-600" @click="resetFunc"
          >reset</BaseButton
        >
        <BaseButton type="decriment" class="bg-blue-500 hover:bg-blue-600" @click="decrFunc"
          >decriment</BaseButton
        >
      </div>
    </div>
  </div>
</template>
