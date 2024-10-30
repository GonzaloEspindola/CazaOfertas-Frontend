<script lang="ts" setup>
import type { OrderBy } from '~/utils/shops'
const { orderProducts } = useCartStore()

const OrderByMap: Record<OrderBy, string> = {
  priceAsc: 'Menor Precio',
  priceDesc: 'Mayor Precio',
  discountDesc: 'Mayor Descuento',
}

const selectedOrder: Ref<string> = ref('Menor Precio')
const showOptions: Ref<boolean> = ref(false)

const submitOrder = (orderBy: OrderBy) => {
  selectedOrder.value = OrderByMap[orderBy]
  showOptions.value = false
  orderProducts(orderBy)
}
</script>

<template>
  <p class="text-text-primary font-semibold text-sm">Ordenar por</p>
  <div class="relative">
    <label
      @click="showOptions = !showOptions"
      class="flex items-center p-4 text-text-primary border border-border rounded-md transition focus-within:outline focus-within:outline-1 focus-within:outline-border hover:outline hover:outline-1 hover:outline-border cursor-pointer select-none relative w-full"
      for="orderBy"
      aria-roledescription="Ordenar por"
      aria-label="Ordenar por"
      aria-haspopup="listbox"
      role="combobox"
      tabindex="0"
    >
      <div class="flex items-center justify-between gap-6 grow">
        {{ selectedOrder }}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="h-4 w-4 stroke-text-secondary"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
    </label>

    <transition name="fade">
      <section
        v-show="showOptions"
        class="flex flex-col items-center p-4 top-16 left-0 text-text-primary border border-border rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-border hover:outline hover:outline-1 hover:outline-border absolute z-[100] bg-[#ffffff] shadow-lg select-none w-full"
      >
        <div
          @click="submitOrder('priceAsc')"
          class="flex items-center justify-between gap-2 p-2 rounded w-full cursor-pointer hover:bg-primary/20"
        >
          <span class="capitalize">Menor precio</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 stroke-text-secondary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
            />
          </svg>
        </div>

        <div
          @click="submitOrder('priceDesc')"
          class="flex items-center justify-between gap-2 p-2 rounded w-full cursor-pointer hover:bg-primary/20"
        >
          <span class="capitalize">Mayor precio</span>

          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 stroke-text-secondary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </div>

        <div
          @click="submitOrder('discountDesc')"
          class="flex items-center justify-between gap-2 p-2 rounded w-full cursor-pointer hover:bg-primary/20"
        >
          <span class="capitalize">Mayor descuento</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 stroke-text-secondary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </section>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
