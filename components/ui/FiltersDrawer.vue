<script setup lang="ts">
interface Props {
  results: number
  isLoading: boolean
}

const { results, isLoading } = defineProps<Props>()
const filterStore = useFiltersStore()
const productNameStore = computed(() => filterStore.productName)
</script>

<template>
  <div class="drawer drawer-start max-w-fit">
    <input id="filters-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <label for="filters-drawer" class="drawer-button">
        <UiButton text="Filtros" variant="outline" hide-text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </UiButton>
      </label>
    </div>

    <div class="drawer-side z-40">

      <label
        for="filters-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <div class="flex flex-col gap-6 bg-white min-h-full p-6 w-[85vw] max-w-[320px] md:max-w-[400px]">
        <div class="flex items-center justify-between border-b border-border pb-4">
          <div class="flex flex-col gap-1">
            <h2
              class="text-lg font-bold text-text-primary"
              :class="{ 'bg-border animate-pulse rounded-sm w-full h-7': isLoading }"
            >
              {{ isLoading ? 'Buscando...' : (productNameStore || 'Filtros') }}
            </h2>
            <span
              v-if="!isLoading"
              class="text-xs text-text-secondary"
            >
              ({{ results }} resultados)
            </span>
          </div>
          <label for="filters-drawer" class="cursor-pointer text-text-secondary hover:text-text-primary">
            <SVGClose class="h-6 w-6" />
          </label>
        </div>

        <SectionsFilters />
      </div>
    </div>
  </div>
</template>

<style scoped>
.drawer-side {
  pointer-events: none;
  position: fixed;
  inset-inline-start: 0px;
  top: 0px;
  grid-column-start: 1;
  grid-row-start: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  align-items: flex-start;
  justify-items: start;
  overflow-x: hidden;
  overflow-y: hidden;
  overscroll-behavior: contain;
  height: 100dvh;
}

.drawer-side > .drawer-overlay {
  position: sticky;
  top: 0px;
  place-self: stretch;
  cursor: pointer;
  background-color: transparent;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  background-color: #0006;
}

.drawer-side > *:not(.drawer-overlay) {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  will-change: transform;
  transform: translateX(-100%);
}

.drawer-toggle:checked ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
  overflow-y: auto;
}

.drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}

.drawer {
  position: relative;
  display: grid;
  grid-auto-columns: max-content auto;
  width: 100%;
}

.drawer-toggle {
  position: fixed;
  height: 0px;
  width: 0px;
  appearance: none;
  opacity: 0;
}
</style>

