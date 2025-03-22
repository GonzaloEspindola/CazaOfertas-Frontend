<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()
</script>

<template>
  <article
    class="flex flex-col p-2 border-[1.5px] border-border rounded-md max-w-[210px] hover:border-primary hover:shadow-lg transition-all max-h-96 bg-white"
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
