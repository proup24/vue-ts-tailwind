<template>
  <div
    class="w-screen min-h-screen flex flex-col items-center justify-center space-y-2"
  >
    <h1 class="text-3xl font-bold underline">
      Tailwind + Vue + Pinia + Vite + TypeScript + Eslint + Prettier + Apollo!
    </h1>
    <span>Count is {{ counterStore.count }}</span>
    <button
      type="button"
      class="border border-black p-2"
      @click="counterStore.increment()"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
