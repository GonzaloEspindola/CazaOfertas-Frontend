<script setup lang="ts">
interface Props {
  text: string
}

const { text } = defineProps<Props>()
</script>

<template>
  <div class="tooltip tooltip-bottom" :data-tip="text">
    <slot />
  </div>
</template>
