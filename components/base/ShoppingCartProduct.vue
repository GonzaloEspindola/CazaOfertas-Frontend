<script setup lang="ts">
import type { ProductCart } from '~/stores/cart'

interface product {
  product: ProductCart
  storeName: string
}

const { product, storeName } = defineProps<product>()

const addQuantityToProduct = () => {
  useCartStore().addQuantityToProduct(product.shop, product.productReference)
}

const removeQuantityToProduct = () => {
  useCartStore().removeQuantityToProduct(product.shop, product.productReference)
}
</script>

<template>
  <article
    class="flex items-center justify-between w-full text-sm border-[1px] border-border p-2 rounded-md mt-3"
    :class="{
      'border-warning bg-warning/10': product.noAvailable,
    }"
  >
    <div class="flex gap-4 items-center">
      <div v-if="!product.noAvailable" class="relative">
        <img
          :src="product.imageUrl"
          alt="product image"
          class="aspect-square object-contain w-14 h-14"
        />
        <img
          v-if="storeName === 'carritoargento'"
          class="h-3 absolute top-0 left-0"
          data-tip="Buscar"
          :src="`/assets/logos/${product.preShop}.webp`"
          :alt="`Logo del supermercado ${product.preShop}`"
        />
      </div>

      <img
        v-else
        src="/assets/logos/no-disponible.webp"
        alt="product image"
        class="aspect-square object-contain w-14 h-14"
      />

      <div class="flex flex-col">
        <h3 class="font-semibold text-text-primary">
          {{ product.productName }}
        </h3>
        <p class="text-xs font-mono text-text-secondary">
          {{ product.productReference }}
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <p
        v-if="product.percentDiscount"
        class="text-text-secondary line-through text-xs"
      >
        $ {{ product.listPriceValue }}
      </p>
      <p class="font-semibold text-text-primary">
        $ {{ product.sellingPriceValue }}
      </p>

      <div class="flex gap-2 items-center">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6 hover:cursor-pointer hover:drop-shadow-lg hover:fill-error/50"
          @click="removeQuantityToProduct"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <p>{{ product.quantity }}</p>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6 hover:cursor-pointer hover:drop-shadow-lg hover:fill-primary/50"
          @click="addQuantityToProduct"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  </article>
</template>
