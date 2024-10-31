<script setup lang="ts">
import { useFiltersStore } from '~/stores/filters'

const route = useRoute()

const { product, shops } = route.query
console.log('product', product)
console.log('shops', shops)

const filterStore = useFiltersStore()
filterStore.productName = product as string
filterStore.shops = shops as string[]

const productNameComputed = computed(() => filterStore.productName)
const shopsComputed = computed(() => filterStore.shops)
const isLoading = computed(() => status.value === 'pending')

const { $api } = useNuxtApp()

const getProductsByShops = async () => {
  const query = {
    productName: productNameComputed.value,
    shops: shopsComputed.value,
  }
  return await $api.product.getProducts(query)
}

const { data, status, execute } = await useAsyncData(
  'search',
  async () => {
    const products = await getProductsByShops()

    useCartStore().setProducts(products)
    return products
  },
  {
    deep: true,
  }
)

watch(
  [shopsComputed, productNameComputed],
  () => {
    console.log('shopsComputed', shopsComputed.value)
    console.log('productNameComputed.value', productNameComputed.value)

    execute()
  },
  {
    deep: true,
  }
)
</script>

<template>
  <main class="flex gap-4 bg-background py-14">
    <SectionsSidebar :results="data?.length || 0" :is-loading="isLoading" />

    <SectionsProducts>
      <ProductSkeleton v-if="isLoading" />
      <ProductCard
        v-else
        v-for="product in data"
        :key="product.productReference + product.shop"
        :product="product"
      />
    </SectionsProducts>

    <div
      v-if="!isLoading && data?.length === 0"
      class="flex flex-col items-center justify-center w-full"
    >
      <img
        src="/assets/svg/empty-cart.png"
        alt="Imagen de carrito vació"
        class="w-48 h-48"
      />
      <p class="text-lg font-semibold text-text-secondary">
        Parece que no se encontraron productos :(
      </p>
    </div>
  </main>
</template>
