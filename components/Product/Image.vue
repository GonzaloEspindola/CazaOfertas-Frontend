<script setup lang="ts">
import type { Product } from '~/repositories/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()

const addingToCart = ref(false)
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
      class="border-b-[1px] border-border grow aspect-square object-contain w-full max-h-64"
    />

    <div class="absolute top-2 left-2 flex gap-2 items-center z-30">
      <button
        v-if="!product.addedToCart"
        type="button"
        @click.stop="addProductToCart"
        class="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg border border-primary/20 transition-all hover:scale-110 active:scale-95 text-primary"
        :disabled="addingToCart"
      >
        <UiLoadingSpinner
          v-if="addingToCart"
          class="h-5 w-5"
        />
        <SVGShoppingCart v-else class="h-5 w-5" />
      </button>

      <button
        v-else
        type="button"
        @click.stop="removeProductFromCart"
        class="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg border border-error/20 transition-all hover:scale-110 active:scale-95 text-error"
      >
        <SVGClose
          class="h-5 w-5"
        />
      </button>

      <button
        type="button"
        @click.stop="searchSpecifyProduct"
        class="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg border border-text-primary/20 transition-all hover:scale-110 active:scale-95 text-text-primary"
      >
        <SVGBarCode class="h-5 w-5" />
      </button>
    </div>




  </section>
</template>
