<template>
  <div class="w-screen min-h-screen">
    <nav class="flex justify-center w-screen">
      <div class="container flex space-x-2 justify-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
.router-link-active {
  @apply underline;
}
</style>
