<script setup lang="ts">
interface Props {
  preShop: string
  shop: string
  productName: string
  description: string
  productReference: string
  brand: string
  listPriceValue: number
  sellingPriceValue: number
  percentDiscount: number
  imageUrl: string
  quantity: number
  noAvailable?: boolean
}

const props = defineProps<Props>()

const addQuantityToProduct = () => {
  useCartStore().addQuantityToProduct(props.shop, props.productReference)
}

const removeQuantityToProduct = () => {
  useCartStore().removeQuantityToProduct(props.shop, props.productReference)
}
</script>

<template>
  <article
    class="flex items-center justify-between w-full text-sm border-[1px] border-base-content/10 p-2 rounded-md mt-3"
    :class="{
      'border-warning bg-warning/10': props.noAvailable,
    }"
  >
    <div class="flex gap-4 items-center">
      <div v-if="!props.noAvailable" class="relative">
        <img
          :src="props.imageUrl"
          alt="product image"
          class="aspect-square object-contain w-14 h-14"
        />
        <img
          v-if="props.shop === 'carritoargento'"
          class="h-3 absolute top-0 left-0"
          data-tip="Buscar"
          :src="`/assets/logos/${props.preShop}.webp`"
          :alt="`Logo del supermercado ${props.preShop}`"
        />
      </div>

      <img
        v-else
        src="/assets/logos/no-disponible.webp"
        alt="product image"
        class="aspect-square object-contain w-14 h-14"
      />

      <div class="flex flex-col">
        <h3 class="font-semibold">{{ props.productName }}</h3>
        <p class="text-xs font-mono text-neutral-400">
          {{ props.productReference }}
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <p
        v-if="props.percentDiscount"
        class="text-gray-400 line-through text-xs"
      >
        $ {{ props.listPriceValue }}
      </p>
      <p class="font-semibold">$ {{ props.sellingPriceValue }}</p>

      <div class="flex gap-2 items-center">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6 hover:cursor-pointer hover:drop-shadow-lg hover:fill-error"
          @click="removeQuantityToProduct"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <p>{{ props.quantity }}</p>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6 hover:cursor-pointer hover:drop-shadow-lg hover:fill-primary"
          @click="addQuantityToProduct"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  </article>
</template>
