<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()

const addingToCart = ref(false)
const filterStore = useFiltersStore()

const addProductToCart = () => {
  try {
    addingToCart.value = true

    useCartStore().addProductToCarts(product)
  } catch (error) {
    console.error(error)
  } finally {
    addingToCart.value = false
  }
}

const searchSpecifyProduct = () => {
  filterStore.setProductName(product.productReference)
}
</script>

<template>
  <section class="relative flex items-center justify-center w-full">
    <img
      :src="product.imageUrl"
      alt="product image"
      class="border-b-2 border-gray-300 grow p-2 aspect-square object-contain w-48 h-48"
    />

    <img
      class="h-6 absolute top-0 left-0"
      data-tip="Buscar"
      :src="`/assets/logos/${product.shop}.webp`"
      :alt="`Logo del supermercado ${product.shop}`"
    />

    <div class="absolute top-0 right-0 flex flex-col gap-1 items-center">
      <UiTooltip
        text="Añadir al carrito"
        @click="addProductToCart"
        class="border border-primary rounded-md hover:cursor-pointer bg-primary/40"
      >
        <SvgShoppingCart class="h-7 w-7 p-[6px]" />
      </UiTooltip>

      <UiTooltip
        text="Buscar este producto especifico en otros supermercados"
        @click="searchSpecifyProduct"
        class="border border-primary rounded-md hover:cursor-pointer bg-primary/40"
      >
        <SvgBarCode class="h-7 w-7 p-[6px]" />
      </UiTooltip>
    </div>
  </section>
</template>
