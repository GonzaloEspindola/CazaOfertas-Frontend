<template>
  <html data-theme="dark" class="p-0">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </html>
</template>

<style>
html:has(.drawer-toggle:checked) {
  overflow-y: visible;
  scrollbar-gutter: stable;
}

body {
  color: #212121;
}
</style>
