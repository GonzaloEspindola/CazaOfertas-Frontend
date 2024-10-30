<script setup lang="ts">
import { filterShops } from '~/utils/shops'
import { useFiltersStore } from '~/stores/filters'

const shops = useFiltersStore().shops
</script>

<template>
  <ul class="flex flex-col gap-2">
    <p class="text-text-primary font-semibold text-sm">Supermercados</p>
    <li v-for="shop in filterShops" :key="shop.id">
      <label class="flex gap-2 items-center cursor-pointer text-text-primary">
        <input
          class="w-5 h-5 rounded-md accent-primary"
          type="checkbox"
          :checked="shops.includes(shop.name)"
          @change="useFiltersStore().toggleShop(shop.name)"
        />
        <span class="label-text">{{ shop.displayName }}</span>
      </label>
    </li>
  </ul>
</template>
