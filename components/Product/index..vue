<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  id: string
  shop: string
  img: string
  name: string
  description: string
  avgPrice: number
  discountPercentage: number
  finalPrice: number
  brand: string
  productReference: string
}

const props = defineProps<Props>()

const hasDiscount = computed(() => props.discountPercentage > 0)
const addingToCart = ref(false)

const addToCart = async () => {
  try {
    addingToCart.value = true

    await useCartStore().addProductToCarts({
      shop: props.shop,
      productName: props.name,
      description: props.description,
      productReference: props.productReference,
      brand: props.brand,
      listPriceValue: props.avgPrice,
      sellingPriceValue: props.finalPrice,
      percentDiscount: props.discountPercentage,
      imageUrl: props.img,
    })
  } catch (error) {
    console.error(error)
  } finally {
    addingToCart.value = false
  }
}
</script>

<template>
  <article
    class="flex flex-col gap-4 p-2 border-[1px] border-gray-300 rounded-md max-w-[210px] hover:border-primary hover:shadow-md transition-all"
  >
    <section class="relative flex items-center justify-center w-full">
      <img
        :src="props.img"
        alt="product image"
        class="border-b-2 border-gray-300 grow p-2 aspect-square object-contain w-48 h-48"
      />
      <img
        class="h-6 absolute top-0 left-0"
        data-tip="Buscar"
        :src="`/assets/logos/${props.shop}.webp`"
        :alt="`Logo del supermercado ${props.shop}`"
      />
    </section>

    <section class="flex flex-col gap-1 px-4 py-1 justify-between grow">
      <h3 class="text-md">{{ props.name }}</h3>

      <div class="flex flex-col">
        <p v-if="hasDiscount" class="text-xs text-gray-400 line-through">
          $ {{ props.avgPrice }}
        </p>

        <div class="flex gap-2 items-center">
          <p class="text-xl font-semibold">$ {{ props.finalPrice }}</p>
          <p
            v-if="hasDiscount"
            class="badge badge-success badge-md rounded-sm text-xs text-white gap-1 items-center justify-center font-mono px-2"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            {{ props.discountPercentage.toFixed(0) }}%
          </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-2">
      <button class="flex" @click="addToCart">
        <div
          class="flex grow justify-center bg-primary border border-primary text-white px-4 py-1 text-sm rounded-s"
        >
          <SVGShoppingCart class="w-4 h-4" />
          Agregar
        </div>

        <Info text="Agrega este producto a tu carrito" />
      </button>

      <button class="flex">
        <div
          class="flex-1 border border-primary text-primary px-4 py-1 text-sm rounded-s"
        >
          Buscar producto
        </div>

        <Info
          text="Buscar este producto exacto en otros supermercados (utilizando su código único)"
          secondary
        />
      </button>
    </section>
  </article>
</template>
