<template>
  <article
    v-for="i in 10"
    :key="i"
    class="flex flex-col gap-4 p-4 border border-border animate-pulse rounded-xl transition-all w-full"
  >
    <div class="bg-border animate-pulse h-48 w-full rounded-md"></div>

    <div class="bg-border animate-pulse h-6 w-full rounded-md"></div>

    <div class="bg-border animate-pulse h-4 w-16 rounded-md"></div>

    <div class="flex gap-2 items-center">
      <div class="bg-border animate-pulse h-4 w-16 rounded-md"></div>
      <div class="bg-border animate-pulse h-4 w-16 rounded-md"></div>
    </div>
  </article>
</template>
