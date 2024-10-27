<script setup lang="ts">
interface Props {
  text: string
  secondary?: boolean
}

const { text, secondary } = defineProps<Props>()
</script>

<template>
  <div
    class="tooltip tooltip-bottom text-white px-3 flex items-center justify-center h-full rounded-e border-t border-r border-b border-primary bg-primary/30"
    :class="{
      'border-t border-r border-b border-primary bg-primary/30': secondary,
    }"
    :data-tip="text"
  >
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-5 w-5 stroke-primary"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  </div>
</template>
