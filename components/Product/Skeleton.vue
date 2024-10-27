<template>
  <article class="grid grid-cols-2 gap-4 w-full md:grid-cols-4 lg:grid-cols-4">
    <article
      v-for="i in 10"
      :key="i"
      class="flex flex-col gap-4 p-2 border-[1px] border-gray-300 rounded-md justify-around min-w-fit"
    >
      <div class="skeleton h-48 w-48 rounded-md"></div>

      <div class="skeleton h-6 w-full rounded-md"></div>

      <div class="skeleton h-4 w-16 rounded-md"></div>

      <div class="flex gap-2 items-center">
        <div class="skeleton h-4 w-16 rounded-md"></div>
        <div class="skeleton h-4 w-16 rounded-md"></div>
      </div>

      <div class="skeleton h-6 w-full rounded-md"></div>
    </article>
  </article>
</template>
