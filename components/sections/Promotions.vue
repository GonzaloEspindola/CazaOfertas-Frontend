<script setup lang="ts">
const { $api } = useNuxtApp()

const { data } = await useAsyncData(
  'promotions',
  async () => {
    return await $api.promotions.getPromotions()
  },
  {
    deep: true,
    immediate: true,
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

const hasError = () => {
  console.log('error')
}

const filteredPromotions = computed(() => {
  if (!data.value) return []
  return data.value[selectedDayIndex.value] || []
})

const methodPays = [
  { id: '1', name: 'PayPal', displayName: 'PayPal' },
  { id: '2', name: 'Uala', displayName: 'Uala' },
  { id: '3', name: 'Santander', displayName: 'Santander' },
]
</script>

<template>
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

      <section class="flex gap-4">
        <UiSelectionInput
          :options="methodPays"
          text="Selecciona los métodos de pago"
        >
          <template #icon>
            <SvgCard />
          </template>
        </UiSelectionInput>

        <UiSelectionInput
          :options="methodPays"
          text="Selecciona los supermercados"
        >
          <template #icon> <SvgShops /> </template
        ></UiSelectionInput>
      </section>

      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(promo, i) in filteredPromotions"
          :key="i"
          class="flex flex-col w-[400px] h-[200px] p-4 rounded-md shadow-md relative"
          :style="{
            backgroundColor: promo.image.color,
          }"
        >
          <SvgPromotionCardBackground class="promotion-image rounded-md" />
          <div class="z-10">
            <div class="flex justify-between">
              <img
                :src="`/assets/logos/${promo.image.image}`"
                class="h-12"
                :alt="promo.image.image"
                @error="hasError()"
              />
              <h3>{{ promo.discount }}</h3>
            </div>
            <p>{{ promo.detail }}</p>
            <small>{{ promo.footer }}</small>
          </div>
        </li>
      </ul>
    </section>
  </SectionsLanding>
</template>

<style>
.promotion-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
