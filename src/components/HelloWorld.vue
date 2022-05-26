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
    <span v-if="loading"> Loading posts... </span>
    <span v-if="error">Error: {{ error }}</span>
    <code v-if="result">
      <pre>
        {{ JSON.stringify(result, undefined, 4) }}
      </pre>
    </code>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '@/services/posts'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const { result, loading, error } = usePosts({
  options: { paginate: { page: 1 } }
})
</script>
