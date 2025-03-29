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

const filteredPromotions = computed(() => {
  if (!data.value) return []
  return data.value[selectedDayIndex.value] || []
})

const selectedCards = ref<string[]>([])
const options = ['Uala', 'Santander']
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

      <UiSelectionInput />

      <div>
        <ul class="flex flex-wrap gap-4">
          <li
            v-for="(promo, i) in filteredPromotions"
            :key="i"
            class="flex flex-col border border-black w-[400px] h-[200px] p-4 rounded-md shadow-md"
            :style="{
              backgroundColor: promo.image.color,
            }"
          >
            <div class="flex justify-between">
              <img
                :src="`/assets/logos/${promo.image.image}`"
                class="h-12"
                :alt="promo.image.image"
              />
              <h3>{{ promo.discount }}</h3>
            </div>
            <p>{{ promo.detail }}</p>
            <small>{{ promo.footer }}</small>
          </li>
        </ul>
      </div>
    </section>
  </SectionsLanding>
</template>
