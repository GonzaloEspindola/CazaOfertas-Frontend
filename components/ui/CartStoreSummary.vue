<script setup lang="ts">
import type { CartItem } from '~/stores/cart'

interface Props {
  cart: CartItem
  storeName: string
}

const { cart, storeName } = defineProps<Props>()
</script>

<template>
  <div class="border border-border rounded-md overflow-hidden">
    <details class="group" :open="cart.needReview">
      <summary
        class="flex justify-between items-center p-4 text-xl font-medium cursor-pointer border-l-4 transition-colors"
        :class="{
          'border-warning': cart.needReview,
          'border-success': !cart.needReview,
        }"
      >
        <div class="flex flex-col gap-1">
          <div class="h-8">
            <img
              v-if="storeName !== 'carritoargento'"
              :src="`/assets/logos/${storeName}.webp`"
              :alt="`Logo de ${storeName}`"
              :title="`Logo de ${storeName}`"
              class="h-full"
            />
            <SvgLogo v-else class="" />
          </div>
          <span
            class="text-xs"
            :class="{
              'text-text-secondary': cart.needReview,
              'text-success': !cart.needReview,
            }"
          >
            {{
              cart.needReview
                ? 'Uy! Parece que no pudimos encontrar algún producto'
                : 'Todos los productos están disponibles'
            }}
          </span>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-text-primary font-bold">$ {{ cart.totalPrice }}</p>
          <span class="text-xs text-text-secondary">subtotal</span>
        </div>
      </summary>

      <div class="px-4 pb-4 pt-2 flex flex-col gap-2 border-t border-border">
        <BaseShoppingCartProduct
          v-for="product in cart.products"
          :key="product.productReference"
          :product="product"
          :store-name="storeName"
        />
      </div>
    </details>
  </div>
</template>
