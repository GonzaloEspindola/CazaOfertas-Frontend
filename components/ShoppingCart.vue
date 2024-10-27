<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content tooltip tooltip-bottom"
      data-tip="Carrito de compras"
    >
      <label for="my-drawer-4" class="drawer-button">
        <SVGShoppingCart
          class="hover:fill-primary hover:cursor-pointer hover:drop-shadow-lg"
        />
      </label>
    </div>

    <div class="drawer-side z-50">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay z-50"
      >
      </label>

      <ul class="flex flex-col gap-6 bg-base-200 min-h-full p-6 z-50 w-[30rem]">
        <li class="flex flex-col">
          <div class="flex gap-2">
            <SVGShoppingCart class="h-6 w-6" />
            <p class="text-lg font-semibold">Carrito de compras</p>
          </div>
          <p class="text-sm text-neutral-500">
            Compara el precio de tu carrito en varios supermercados
          </p>
        </li>
        <li class="flex flex-col gap-4">
          <div
            v-for="(cart, store) in cartStore.carts"
            :key="store"
            class="collapse border-[1px] border-base-content/10"
          >
            <input type="radio" name="my-accordion-1" />

            <div
              class="collapse-title text-xl font-medium flex justify-between p-4 border-l-8"
              :class="{
                ' border-warning': cart.needReview,
                ' border-success': !cart.needReview,
              }"
            >
              <div class="flex flex-col gap-1">
                <img
                  :src="`/assets/logos/${store}.webp`"
                  :alt="`Logo de ${store}`"
                  :title="`Logo de ${store}`"
                  class="h-6 w-fit"
                />
                <span
                  class="text-xs"
                  :class="{
                    'text-warning': cart.needReview,
                    'text-success': !cart.needReview,
                  }"
                  >{{
                    cart.needReview
                      ? 'Uy! Parece que no pudimos encontrar algún producto'
                      : 'Todos los productos están disponibles'
                  }}</span
                >
              </div>

              <div class="flex flex-col items-end">
                <p>$ {{ cart.totalPrice }}</p>
                <span class="text-xs text-neutral-500">subtotal</span>
              </div>
            </div>

            <div
              class="collapse-content flex flex-col gap-2 border-t border-base-content/10"
            >
              <ShoppingCartProduct
                v-for="product in cart.products"
                :key="product.productReference"
                :shop="store as string"
                :product-name="product.productName"
                :description="product.description"
                :product-reference="product.productReference"
                :brand="product.brand"
                :list-price-value="product.listPriceValue"
                :selling-price-value="product.sellingPriceValue"
                :percent-discount="product.percentDiscount"
                :image-url="product.imageUrl"
                :quantity="product.quantity"
                :no-available="product.noAvailable"
                :pre-shop="product.preShop"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
