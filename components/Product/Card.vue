<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()
</script>

<template>
  <article
    class="flex flex-col gap-4 p-2 border-[1px] border-gray-300 rounded-md max-w-[210px] hover:border-primary hover:shadow-md transition-all"
  >
    <ProductImage
      :product="product"
      :image-url="product.imageUrl"
      :shop="product.shop"
    />

    <ProductInformation
      :productName="product.productName"
      :listing-price-value="product.listPriceValue"
      :selling-price-value="product.sellingPriceValue"
      :percent-discount="product.percentDiscount"
    />
  </article>
</template>
