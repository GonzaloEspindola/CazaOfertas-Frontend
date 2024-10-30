<script setup lang="ts">
interface Props {
  results: number
  isLoading: boolean
}

const { results } = defineProps<Props>()
const filterStore = useFiltersStore()
const productNameStore = computed(() => filterStore.productName)
</script>

<template>
  <aside class="w-[20rem]">
    <div class="flex flex-col gap-1">
      <h2
        class="text-lg font-semibold text-text-primary"
        :class="{ 'skeleton rounded-md w-full h-7': isLoading }"
      >
        {{ isLoading ? '' : productNameStore }}
      </h2>
      <span
        class="text-xs text-gray-500 text-text-secondary"
        :class="{ 'skeleton rounded-md w-24 h-4': isLoading }"
        >{{ isLoading ? '' : `(${results} resultados)` }}</span
      >
    </div>

    <SectionsFilters />
  </aside>
</template>
