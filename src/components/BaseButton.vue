<script setup lang="ts">
import { PropType, useAttrs } from "vue";
defineProps({
    type:{
        type: String as PropType<string>
    }
})
const attrs = useAttrs();
</script>
<template>
  <button v-bind="attrs" :data-type="type" class="px-5 py-1 rounded cursor-pointer text-white text-lg"><slot>count</slot></button>
</template>
