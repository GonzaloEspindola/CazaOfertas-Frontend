<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()
</script>

<template>
  <article
    class="flex flex-col p-4 border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all md:max-h-96 bg-white w-full"
  >
    <ProductImage :product="product" />

    <ProductInformation
      :productName="product.productName"
      :listing-price-value="product.listPriceValue"
      :selling-price-value="product.sellingPriceValue"
      :percent-discount="product.percentDiscount"
      :shop="product.shop"
    />

    <ProductShop :shop="product.shop" :link="product.link" />
  </article>
</template>
