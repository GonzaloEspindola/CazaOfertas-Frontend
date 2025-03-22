<script setup lang="ts">
interface Props {
  text: string
  variant?: 'normal' | 'outline'
}

const { text, variant = 'normal' } = defineProps<Props>()
</script>

<template>
  <div
    as="button"
    type="button"
    aria-label="button"
    role="button"
    :class="[
      'drawer-button flex items-center gap-2 py-2 px-4 rounded-sm transition-all duration-300',
      variant === 'normal'
        ? 'bg-primary text-white hover:bg-primary-hover border-2 border-primary'
        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ]"
  >
    <slot />
    <span class="text-xs font-semibold">{{ text }}</span>
  </div>
</template>
