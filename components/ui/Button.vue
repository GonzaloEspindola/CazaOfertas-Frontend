<script setup lang="ts">
interface Props {
  text: string
  variant?: 'normal' | 'outline'
  hideTextMobile?: boolean
  hideText?: boolean
}

const { text, variant = 'normal', hideTextMobile = false, hideText = false } = defineProps<Props>()

</script>

<template>
  <div
    as="button"
    type="button"
    aria-label="button"
    role="button"
    :class="[
      'drawer-button flex items-center justify-center h-14 gap-2 px-4 rounded-lg transition-all duration-300',
      variant === 'normal'
        ? 'bg-primary text-white hover:bg-primary-hover border border-primary'
        : 'border border-primary text-primary hover:bg-primary hover:text-white',
    ]"

  >
    <slot />
    <span v-if="!hideText" :class="['text-xs font-semibold', { 'hidden md:inline': hideTextMobile }]">{{ text }}</span>

  </div>
</template>

