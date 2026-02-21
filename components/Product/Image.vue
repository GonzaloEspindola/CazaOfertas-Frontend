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

    <div class="absolute top-4 left-4 flex gap-3 items-center z-30">
      <button
        v-if="!product.addedToCart"
        type="button"
        @click.stop="addProductToCart"
        class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-2xl border-2 border-primary/20 transition-all hover:scale-110 active:scale-95 text-primary"
        :disabled="addingToCart"
      >
        <UiLoadingSpinner
          v-if="addingToCart"
          class="h-7 w-7"
        />
        <SVGShoppingCart v-else class="h-7 w-7" />
      </button>

      <button
        v-else
        type="button"
        @click.stop="removeProductFromCart"
        class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-2xl border-2 border-error/20 transition-all hover:scale-110 active:scale-95 text-error"
      >
        <SVGClose
          class="h-7 w-7"
        />
      </button>

      <button
        type="button"
        @click.stop="searchSpecifyProduct"
        class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-2xl border-2 border-text-primary/20 transition-all hover:scale-110 active:scale-95 text-text-primary"
      >
        <SVGBarCode class="h-7 w-7" />
      </button>
    </div>



  </section>
</template>
