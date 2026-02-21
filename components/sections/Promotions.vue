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
const promoImageContainer = ref<HTMLElement | null>(null)

const filteredPromotions = computed(() => {
  if (!data.value) return []
  return data.value[selectedDayIndex.value] || []
})

const methodPays = [
  { id: '1', name: 'PayPal', displayName: 'PayPal' },
  { id: '2', name: 'Uala', displayName: 'Uala' },
  { id: '3', name: 'Santander', displayName: 'Santander' },
]

const setSelectedDay = (index: number) => {
  selectedDayIndex.value = index
}

const setSelectedShop = (index: number) => {
  console.log(index)
}
</script>

<template>
  <SectionsLanding>
    <h2 class="text-2xl md:text-3xl text-text-primary mb-4 text-center">
      Descuentos y promociones esta semana:
    </h2>

    <section class="flex flex-col gap-6 w-full">
      <div
        class="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar px-2"
      >
        <UiButton
          v-for="(day, index) in days"
          :key="index"
          :text="day"
          :variant="index === selectedDayIndex ? 'normal' : 'outline'"
          @click="setSelectedDay(index)"
          class="shrink-0 whitespace-nowrap"
        />
      </div>

      <section class="flex flex-col md:flex-row gap-4">
        <UiSelectionInput
          :options="methodPays"
          text="Selecciona los métodos de pago"
          class="flex-1"
        >
          <template #icon>
            <SVGCard />
          </template>
        </UiSelectionInput>

        <UiSelectionInput
          :options="methodPays"
          text="Selecciona los supermercados"
          class="flex-1"
        >
          <template #icon> <SVGShops /> </template>
        </UiSelectionInput>
      </section>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <li
          v-for="(promo, i) in filteredPromotions"
          :key="i"
          class="flex flex-col w-full h-auto min-h-[160px] md:h-[200px] p-6 rounded-xl border border-border shadow-sm bg-white relative overflow-hidden transition hover:shadow-md"
        >
          <div class="z-10 flex flex-col h-full justify-between">
            <div class="flex justify-between items-start">
              <img
                class="h-10 md:h-12 object-contain"
                :class="`image-${i}`"
                :src="`/assets/logos/${promo.image.image}`"
                :alt="promo.image.image"
              />
              <h3 class="font-bold text-primary text-lg">{{ promo.discount }}</h3>
            </div>
            <div class="mt-4">
              <p class="text-text-primary font-medium line-clamp-2">{{ promo.detail }}</p>
              <small class="text-text-secondary mt-1 block">{{ promo.footer }}</small>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </SectionsLanding>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

