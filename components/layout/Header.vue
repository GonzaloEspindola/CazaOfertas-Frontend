<script setup lang="ts"></script>

<template>
  <header class="py-4 md:py-8">
    <nav class="max-w-screen-xl mx-auto">
      <ul class="flex justify-between items-center gap-4">
        <li class="shrink-0">
          <NuxtLink to="/">
            <SVGLogo class="h-8 md:h-10 w-auto" />
          </NuxtLink>
        </li>
        <li class="hidden md:flex items-center gap-2">
          <NuxtLink href="/" class="text-sm text-text-primary hover:text-black"
            >Inicio</NuxtLink
          >
          <UiDot />
          <NuxtLink href="/" class="text-sm text-text-primary hover:text-black"
            >Como funciona</NuxtLink
          >
        </li>
        <li class="flex items-center">
          <UiShoppingCartDrawer />
        </li>
      </ul>
    </nav>
  </header>
</template>

