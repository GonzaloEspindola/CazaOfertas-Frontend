<script setup lang="ts"></script>

<template>
  <header class="py-6 shadow-md">
    <nav class="max-w-screen-xl mx-auto">
      <ul class="flex justify-between items-center">
        <li>
          <NuxtLink to="/">
            <SvgLogo />
          </NuxtLink>
        </li>
        <li>
          <UiShoppingCartDrawer class="h-6 w-6" />
        </li>
      </ul>
    </nav>
  </header>
</template>
