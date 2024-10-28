<script setup lang="ts">
import { useCartStore, type Cart } from '~/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="drawer drawer-end">
    <input id="cart-drawer" type="checkbox" class="drawer-toggle" />

    <div
      class="drawer-content tooltip tooltip-bottom"
      data-tip="Carrito de compras"
    >
      <label for="cart-drawer" class="drawer-button">
        <SvgShoppingCart
          class="hover:fill-primary hover:cursor-pointer hover:drop-shadow-lg"
        />
      </label>
    </div>

    <div class="drawer-side z-50">
      <label
        for="cart-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <ul class="flex flex-col gap-6 bg-base-200 min-h-full p-6 z-50 w-[30rem]">
        <li class="flex flex-col">
          <div class="flex gap-2">
            <SvgShoppingCart class="h-6 w-6" />
            <p class="text-lg font-semibold">Carrito de compras</p>
          </div>
          <p class="text-sm text-neutral-500">
            Compara el precio de tu carrito en varios supermercados
          </p>
        </li>
        <li class="flex flex-col gap-4">
          <UiCartStoreSummary
            v-for="[storeName, cart] in Object.entries(cartStore.carts)"
            :key="storeName"
            :id="storeName"
            :cart="cart"
            :store-name="storeName"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
