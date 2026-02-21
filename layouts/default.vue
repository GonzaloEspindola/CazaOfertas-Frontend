<script setup lang="ts"></script>

<template>
  <div class="relative min-h-screen bg-background">
    <div
      class="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-50"
    ></div>

    <div
      class="flex flex-col max-w-screen-xl min-h-screen mx-auto z-10 px-4 md:px-6 lg:px-8"
    >
      <LayoutHeader />
      <slot />
    </div>
  </div>
</template>

