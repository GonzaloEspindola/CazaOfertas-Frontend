<template>
  <article
    v-for="i in 10"
    :key="i"
    class="flex flex-col gap-4 p-2 border-[1px] border-border animate-pulse rounded-md max-w-[210px] hover:border-primary hover:shadow-md transition-all"
  >
    <div class="bg-border animate-pulse h-48 w-48 rounded-md"></div>

    <div class="bg-border animate-pulse h-6 w-full rounded-md"></div>

    <div class="bg-border animate-pulse h-4 w-16 rounded-md"></div>

    <div class="flex gap-2 items-center">
      <div class="bg-border animate-pulse h-4 w-16 rounded-md"></div>
      <div class="bg-border animate-pulse h-4 w-16 rounded-md"></div>
    </div>
  </article>
</template>
