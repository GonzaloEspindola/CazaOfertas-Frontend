<script setup lang="ts">
import { useFiltersStore } from '~/stores/filters'

const filterStore = useFiltersStore()

const productName = computed(() => filterStore.productName)
const shops = computed(() => filterStore.shops)
const isLoading = computed(() => status.value === 'pending')

const { $api } = useNuxtApp()

const getProductsByShops = async () => {
  const query = {
    productName: productName.value,
    shops: shops.value,
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
  [shops, productName],
  () => {
    execute()
  },
  {
    deep: true,
  }
)
</script>

<template>
  <main class="flex gap-4 bg-background py-14">
    <Sidebar :results="data?.length || 0" :is-loading="isLoading" />
    <div>
      <ProductSkeleton v-if="isLoading" />
      <ProductsSection v-else :data="data!" />
    </div>
  </main>
</template>
