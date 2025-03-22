<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()

const addingToCart: Ref<boolean> = ref(false)
const filterStore = useFiltersStore()

const addProductToCart = async () => {
  try {
    addingToCart.value = true
    await useCartStore().addProductToCarts(product, filterStore.shops)
  } catch (error) {
    console.error(error)
  } finally {
    addingToCart.value = false
  }
}

const removeProductFromCart = async () => {
  try {
    addingToCart.value = true
    await useCartStore().removeProductFromCart(
      product.shop,
      product.productReference
    )
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
      class="border-b-[1px] border-border grow p-2 aspect-square object-contain w-48 h-48"
    />

    <div class="absolute top-0 left-0 flex gap-2 items-center">
      <UiTooltip
        v-if="!product.addedToCart"
        text="Añadir al carrito"
        @click="addProductToCart"
        class="rounded-md hover:cursor-pointer bg-primary/80"
        :class="{ 'bg-text-secondary/80 pointer-events-none ': addingToCart }"
      >
        <UiLoadingSpinner
          v-if="addingToCart"
          class="h-7 w-7 p-[6px] stroke-white"
        />
        <SvgShoppingCart v-else class="h-7 w-7 p-[6px] stroke-white" />
      </UiTooltip>

      <UiTooltip
        v-else
        text="Producto ya añadido al carrito"
        class="rounded-md bg-primary/80"
      >
        <SvgClose
          class="h-7 w-7 p-[6px] stroke-white cursor-pointer"
          @click="removeProductFromCart"
        />
      </UiTooltip>

      <UiTooltip
        :text="`Buscar este producto especifico en otros supermercados (${product.productReference})`"
        @click="searchSpecifyProduct"
        class="rounded-md hover:cursor-pointer bg-primary/80"
      >
        <SvgBarCode class="h-7 w-7 p-[6px]" />
      </UiTooltip>
    </div>
  </section>
</template>
