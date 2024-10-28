<template>
  <html data-theme="dark" class="p-0">
    <NuxtLayout>
      <NuxtPage class="text-secondary" />
    </NuxtLayout>
  </html>
</template>

<style>
html:has(.drawer-toggle:checked) {
  overflow-y: visible;
  scrollbar-gutter: stable;
}
</style>
