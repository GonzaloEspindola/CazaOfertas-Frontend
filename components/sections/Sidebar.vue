<script setup lang="ts">
interface Props {
  results: number
  isLoading: boolean
}

const { results, isLoading } = defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-2 w-full">

    <div class="grow max-w-md">
      <UiSearch />
    </div>

    <UiFiltersDrawer :results="results" :is-loading="isLoading" />
  </div>

</template>

