<script setup lang="ts">
import { filterShops } from '~/utils/shops'

const shops = useFiltersStore().shops
</script>

<template>
  <ul class="flex flex-col gap-2">
    <p class="font-semibold">Supermercados</p>
    <li v-for="shop in filterShops" :key="shop.id">
      <label class="flex gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          class="checkbox"
          :checked="shops.includes(shop.name)"
          @change="useFiltersStore().toggleShop(shop.name)"
        />
        <span class="label-text">{{ shop.displayName }}</span>
      </label>
    </li>
  </ul>
</template>
