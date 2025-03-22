<script setup lang="ts"></script>

<template>
  <header class="py-8">
    <nav class="max-w-screen-xl mx-auto">
      <ul class="flex justify-between items-center">
        <li>
          <NuxtLink to="/">
            <SvgLogo />
          </NuxtLink>
        </li>
        <li class="flex items-center gap-2">
          <NuxtLink href="/" class="text-sm text-text-primary hover:text-black"
            >Inicio</NuxtLink
          >
          <UiDot />
          <NuxtLink href="/" class="text-sm text-text-primary hover:text-black"
            >Como funciona</NuxtLink
          >
        </li>
        <li>
          <UiShoppingCartDrawer />
        </li>
      </ul>
    </nav>
  </header>
</template>
