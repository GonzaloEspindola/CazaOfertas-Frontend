<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="drawer drawer-end max-w-fit">
    <input id="cart-drawer" type="checkbox" class="drawer-toggle" />

    <div
      class="drawer-content tooltip tooltip-bottom"
      data-tip="Carrito de compras"
    >
      <label for="cart-drawer" class="drawer-button">
        <UiButton text="Carrito de compras">
          <SvgShoppingCart class="h-3 w-3 stroke-white" />
        </UiButton>
      </label>
    </div>

    <div class="drawer-side">
      <label
        for="cart-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <ul class="flex flex-col gap-6 bg-white min-h-full p-6 z-50 w-[30rem]">
        <li class="flex flex-col">
          <div class="flex gap-2">
            <SvgShoppingCart class="h-6 w-6" />
            <p class="text-lg font-semibold">Carrito de compras</p>
          </div>
          <p class="text-sm text-neutral-500">
            Compara el precio de tu carrito en varios supermercados
          </p>
        </li>
        <li class="flex flex-col gap-4">
          <UiCartStoreSummary
            v-for="[storeName, cart] in Object.entries(cartStore.carts)"
            :key="storeName"
            :id="storeName"
            :cart="cart"
            :store-name="storeName"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.drawer {
  position: relative;
  display: grid;
  grid-auto-columns: max-content auto;
  width: 100%;
  z-index: 100;
}

.drawer-end {
  grid-auto-columns: auto max-content;
}
.drawer-end > .drawer-toggle ~ .drawer-content {
  grid-column-start: 1;
}
.drawer-end > .drawer-toggle ~ .drawer-side {
  grid-column-start: 2;
  justify-items: end;
}
.drawer-end > .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(100%);
}
[dir='rtl']
  .drawer-end
  > .drawer-toggle
  ~ .drawer-side
  > *:not(.drawer-overlay) {
  transform: translateX(-100%);
}
.drawer-end > .drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}

.drawer-toggle {
  position: fixed;
  height: 0px;
  width: 0px;
  appearance: none;
  opacity: 0;
}
.drawer-toggle:checked ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
  overflow-y: auto;
}
.drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
.drawer-end > .drawer-toggle ~ .drawer-content {
  grid-column-start: 1;
}
.drawer-end > .drawer-toggle ~ .drawer-side {
  grid-column-start: 2;
  justify-items: end;
}
.drawer-end > .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(100%);
}
[dir='rtl']
  .drawer-end
  > .drawer-toggle
  ~ .drawer-side
  > *:not(.drawer-overlay) {
  transform: translateX(-100%);
}
.drawer-end > .drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  background-color: #0006;
}
.drawer-toggle:focus-visible ~ .drawer-content label.drawer-button {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
}
.drawer-open > .drawer-toggle {
  display: none;
}
.drawer-open > .drawer-toggle ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
  position: sticky;
  display: block;
  width: auto;
  overscroll-behavior: auto;
}
.drawer-open > .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
[dir='rtl']
  .drawer-open
  > .drawer-toggle
  ~ .drawer-side
  > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
.drawer-open > .drawer-toggle:checked ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
}
html:has(.drawer-toggle:checked) {
  overflow-y: hidden;
  scrollbar-gutter: stable;
}
.drawer-open > .drawer-toggle ~ .drawer-side > .drawer-overlay {
  cursor: default;
  background-color: transparent;
}
.drawer-content {
  grid-column-start: 2;
  grid-row-start: 1;
  min-width: 0px;
}
.drawer-end > .drawer-toggle ~ .drawer-content {
  grid-column-start: 1;
}
.drawer-toggle:focus-visible ~ .drawer-content label.drawer-button {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
}

.drawer-toggle:focus-visible ~ .drawer-content label.drawer-button {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
}

.drawer-side {
  pointer-events: none;
  position: fixed;
  inset-inline-start: 0px;
  top: 0px;
  grid-column-start: 1;
  grid-row-start: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  align-items: flex-start;
  justify-items: start;
  overflow-x: hidden;
  overflow-y: hidden;
  overscroll-behavior: contain;
  height: 100dvh;
}
.drawer-side > .drawer-overlay {
  position: sticky;
  top: 0px;
  place-self: stretch;
  cursor: pointer;
  background-color: transparent;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
}
.drawer-side > * {
  grid-column-start: 1;
  grid-row-start: 1;
}
.drawer-side > *:not(.drawer-overlay) {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 300ms;
  will-change: transform;
  transform: translateX(-100%);
}
[dir='rtl'] .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(100%);
}
.drawer-toggle:checked ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
  overflow-y: auto;
}
.drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
.drawer-end > .drawer-toggle ~ .drawer-side {
  grid-column-start: 2;
  justify-items: end;
}
.drawer-end > .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(100%);
}
[dir='rtl']
  .drawer-end
  > .drawer-toggle
  ~ .drawer-side
  > *:not(.drawer-overlay) {
  transform: translateX(-100%);
}
.drawer-end > .drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  background-color: #0006;
}
.drawer-open > .drawer-toggle ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
  position: sticky;
  display: block;
  width: auto;
  overscroll-behavior: auto;
}
.drawer-open > .drawer-toggle ~ .drawer-side > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
[dir='rtl']
  .drawer-open
  > .drawer-toggle
  ~ .drawer-side
  > *:not(.drawer-overlay) {
  transform: translateX(0%);
}
.drawer-open > .drawer-toggle:checked ~ .drawer-side {
  pointer-events: auto;
  visibility: visible;
}
.drawer-open > .drawer-side {
  overflow-y: auto;
}
.drawer-open > .drawer-toggle ~ .drawer-side > .drawer-overlay {
  cursor: default;
  background-color: transparent;
}

.drawer-side > .drawer-overlay {
  position: sticky;
  top: 0px;
  place-self: stretch;
  cursor: pointer;
  background-color: transparent;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
}
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  background-color: #0006;
}
.drawer-open > .drawer-toggle ~ .drawer-side > .drawer-overlay {
  cursor: default;
  background-color: transparent;
}
</style>
