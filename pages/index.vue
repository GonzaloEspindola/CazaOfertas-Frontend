<script setup lang="ts">
import { ref, computed } from 'vue'

const { $api } = useNuxtApp()

const { data } = await useAsyncData(
  'promotions',
  async () => {
    return await $api.promotions.getPromotions()
  },
  {
    deep: true,
  }
)

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
]

const selectedDayIndex = ref(new Date().getDay() - 1)

const setSelectedDay = (index: number) => {
  selectedDayIndex.value = index
}

const setSelectedShop = (index: number) => {
  console.log(index)
}

const filteredPromotions = computed(() => {
  if (!data.value) return []
  return data.value[selectedDayIndex.value] || []
})
</script>

<template>
  <SectionsLanding>
    <h1 class="text-4xl text-text-primary font-bold">
      ¡Elegí tu <span class="text-primary">supermercado</span>, elegí
      <span class="text-primary">ahorrar</span>!
    </h1>
    <h2 class="text-lg text-text-secondary">
      Arma tu carrito y elegí el supermercado que más te convenga.
    </h2>
    <UiSearch class="mt-8" />
  </SectionsLanding>

  <SectionsLanding>
    <h2 class="text-3xl text-text-primary mb-4">
      Descuentos y promociones esta semana:
    </h2>

    <section class="flex flex-col gap-4">
      <div class="flex items-center justify-center gap-4">
        <UiButton
          v-for="(day, index) in days"
          :key="index"
          :text="day"
          :variant="index === selectedDayIndex ? 'normal' : 'outline'"
          @click="setSelectedDay(index)"
        />
      </div>

      <div class="flex items-center justify-center gap-4">
        <UiButton
          v-for="(shop, index) in availableShops"
          :key="index"
          :text="shop"
          :variant="index === selectedDayIndex ? 'normal' : 'outline'"
          @click="setSelectedShop(index)"
        />
      </div>

      <div v-if="filteredPromotions.length">
        <ul>
          <li v-for="(promo, i) in filteredPromotions" :key="i">
            <h3>{{ promo.descuento }}</h3>
            <p>{{ promo.detalle }}</p>
            <img :src="promo.imagen" alt="Imagen de promoción" />
            <small>{{ promo.footer }}</small>
          </li>
        </ul>
      </div>
      <p v-else>No hay promociones para este día.</p>
    </section>
  </SectionsLanding>
</template>
