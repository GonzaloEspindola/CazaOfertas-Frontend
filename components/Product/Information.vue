<script setup lang="ts">
interface Props {
  productName: string
  listingPriceValue: number
  sellingPriceValue: number
  percentDiscount: number
  shop: string
}

const {
  productName,
  listingPriceValue,
  sellingPriceValue,
  percentDiscount,
  shop,
} = defineProps<Props>()

const hasDiscount = computed(() => percentDiscount > 0)
</script>

<template>
  <section class="flex flex-col gap-1 px-2 py-4 justify-between grow">
    <h3 class="text-md font-semibold">{{ productName }}</h3>

    <div class="flex flex-col">
      <p v-if="hasDiscount" class="text-xs text-gray-400 line-through">
        $ {{ listingPriceValue.toFixed(2) }}
      </p>

      <div class="flex gap-2 items-center">
        <p class="text-xl font-semibold">
          $ {{ sellingPriceValue.toFixed(2) }}
        </p>
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

          {{ percentDiscount.toFixed(0) }}%
        </p>
      </div>
    </div>
  </section>
</template>
