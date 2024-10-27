<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  data: Product[]
}

const { data } = defineProps<Props>()
</script>

<template>
  <section class="grid grid-cols-2 gap-4 w-full md:grid-cols-4 lg:grid-cols-4">
    <ProductIndex
      v-for="product in data"
      :key="product.productName"
      :id="product.productName"
      :shop="product.shop"
      :img="product.imageUrl"
      :name="product.productName"
      :description="product.description"
      :avg-price="product.listPriceValue"
      :discount-percentage="product.percentDiscount"
      :final-price="product.sellingPriceValue"
      :brand="product.brand"
      :product-reference="product.productReference"
    />
  </section>
</template>
