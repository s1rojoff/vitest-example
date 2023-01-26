<script setup lang="ts">
const props= defineProps(['modelValue', 'type', 'placeholder'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input :placeholder="props.placeholder" :type="props.type" :value="modelValue" 
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
    class="w-full h-8 rounded px-1.5 placeholder:text-black text-black text-base outline-none mt-3">
</template>