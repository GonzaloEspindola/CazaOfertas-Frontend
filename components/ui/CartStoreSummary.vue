<script setup lang="ts">
import type { CartItem } from '~/stores/cart'

interface Props {
  cart: CartItem
  storeName: string
}

const { cart, storeName } = defineProps<Props>()
</script>

<template>
  <div class="collapse border-[1px] border-base-content/10">
    <input type="radio" name="my-accordion-1" />
    <div
      class="collapse-title text-xl font-medium flex justify-between p-4 border-l-8"
      :class="{
        'border-warning': cart.needReview,
        'border-success': !cart.needReview,
      }"
    >
      <div class="flex flex-col gap-1">
        <img
          :src="`/assets/logos/${storeName}.webp`"
          :alt="`Logo de ${storeName}`"
          :title="`Logo de ${storeName}`"
          class="h-6 w-fit"
        />
        <span
          class="text-xs"
          :class="{
            'text-warning': cart.needReview,
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
        <p>$ {{ cart.totalPrice }}</p>
        <span class="text-xs text-neutral-500">subtotal</span>
      </div>
    </div>
    <div
      class="collapse-content flex flex-col gap-2 border-t border-base-content/10"
    >
      <BaseShoppingCartProduct
        v-for="product in cart.products"
        :key="product.productReference"
        :product="product"
        :store-name="storeName"
      />
    </div>
  </div>
</template>
