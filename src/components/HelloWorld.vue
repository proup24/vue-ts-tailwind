<template>
  <div
    class="w-screen min-h-screen flex flex-col items-center justify-center space-y-2"
  >
    <h1 class="text-3xl font-bold underline">
      Tailwind + Vue + Pinia + Vite + TypeScript + Eslint + Prettier!
    </h1>
    <span>Count is {{ counterStore.count }}</span>
    <button
      type="button"
      class="border border-black p-2"
      @click="counterStore.increment()"
    >
      Increment
    </button>
    <pre>
      <code>
        isLoading {{ loading }}
        error {{ error }}
        {{ JSON.stringify(result) }}
      </code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '@/services/posts'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const { result, loading, error } = usePosts()
</script>
