<script setup lang="ts">
interface Props {
  text: string
}

const { text } = defineProps<Props>()
</script>

<template>
  <div
    as="button"
    type="button"
    aria-label="button"
    role="button"
    class="drawer-button flex items-center gap-2 bg-primary py-2 px-4 rounded-sm hover:bg-primary-hover transition-all duration-300"
  >
    <slot />
    <span class="text-white text-xs font-semibold">{{ text }}</span>
  </div>
</template>
