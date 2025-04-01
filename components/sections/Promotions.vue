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
          <template #icon> <SvgShops /> </template>
        </UiSelectionInput>
      </section>

      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(promo, i) in filteredPromotions"
          :key="i"
          class="flex flex-col w-[400px] h-[200px] p-4 rounded-md shadow-md relative"
        >
          <!-- <SvgPromotionCardBackground
            class="promotion-image rounded-md"
            :primary-color="promo.image.colors.primaryColor"
            :secondary-color="promo.image.colors.secondaryColor"
            :light-color="promo.image.colors.lightColor"
          /> -->

          <div class="z-10">
            <div class="flex justify-between">
              <img
                class="h-12"
                :class="`image-${i}`"
                :src="`/assets/logos/${promo.image.image}`"
                :alt="promo.image.image"
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
