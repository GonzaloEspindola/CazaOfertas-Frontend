<template>
  <section class="flex flex-col gap-4">
    <UiOrderBy />
    <section
      class="grid grid-cols-2 gap-4 w-full md:grid-cols-4 lg:grid-cols-4"
    >
      <slot />
    </section>
  </section>
</template>
