<script setup lang="ts">
interface Props {
  productName: string
  listingPriceValue: number
  sellingPriceValue: number
  percentDiscount: number
  shop: string
}

const { productName, listingPriceValue, sellingPriceValue, percentDiscount } =
  defineProps<Props>()

const hasDiscount = computed(() => percentDiscount > 0)
</script>

<template>
  <section class="flex flex-col gap-2 px-4 py-4 justify-between grow">

    <h3 class="text-sm font-semibold text-text-primary">{{ productName }}</h3>

    <div class="flex flex-col">
      <p v-if="hasDiscount" class="text-xs text-text-secondary line-through">
        $ {{ listingPriceValue.toFixed(2) }}
      </p>

      <div class="flex gap-2 items-center">
        <p class="text-xl font-bold text-text-primary">
          $ {{ sellingPriceValue.toFixed(2) }}
        </p>
        <UiBadge v-if="hasDiscount" :percent-discount="percentDiscount" />
      </div>
    </div>
  </section>
</template>
