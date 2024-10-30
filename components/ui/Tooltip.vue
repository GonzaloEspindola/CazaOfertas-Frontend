<script setup lang="ts">
interface Props {
  text: string
}

const { text } = defineProps<Props>()
</script>

<template>
  <div class="relative group">
    <slot />
    <div
      class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-text-primary text-white text-xs py-1 px-2 hidden group-hover:flex transition-opacity duration-200 shadow-lg"
      :aria-label="text"
      aria-roledescription="tooltip"
      role="tooltip"
    >
      {{ text }}
    </div>
  </div>
</template>
