<script setup lang="ts">
const shops = [
  { id: 'Carrefour', name: 'Carrefour', status: 'available' },
  { id: 'Dia', name: 'Dia', status: 'available' },
  { id: 'disco', name: 'Disco', status: 'available' },
  { id: 'Vea', name: 'Vea', status: 'available' },
  { id: 'changomas', name: 'ChangoMas', status: 'maintenance' },
  { id: 'jumbo', name: 'Jumbo', status: 'available' },
  { id: 'Coto', name: 'Coto', status: 'maintenance' },
  { id: 'Vital', name: 'Vital', status: 'available' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-success'
    case 'maintenance':
      return 'bg-warning'
    case 'unavailable':
      return 'bg-error'
    default:
      return 'bg-gray-400'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'available':
      return 'Disponible'
    case 'maintenance':
      return 'Mantenimiento'
    case 'unavailable':
      return 'No disponible'
    default:
      return 'Desconocido'
  }
}
</script>

<template>
  <SectionsLanding>
    <div class="max-w-4xl w-full px-4">
      <h2 class="text-2xl md:text-3xl text-text-primary mb-3 text-center font-bold">
        Disponibilidad de Supermercados
      </h2>
      <p class="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
        Estado en tiempo real de nuestras conexiones. Debido a diferentes motivos, algunos servicios pueden entrar en mantenimiento temporalmente.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="shop in shops" 
          :key="shop.id"
          class="flex items-center justify-between p-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 flex items-center justify-center p-1 rounded-lg bg-gray-50 border border-border/50">
              <img 
                :src="`/assets/logos/${shop.id}.webp`" 
                :alt="`Logo de ${shop.name}`"
                class="max-h-full max-w-full object-contain"
              />
            </div>
            <span class="font-semibold text-text-primary">{{ shop.name }}</span>
          </div>

          <div class="flex flex-col items-end">
            <div class="flex items-center gap-2">
              <span class="text-[10px] uppercase tracking-wider font-bold text-text-secondary">{{ getStatusText(shop.status) }}</span>
              <div :class="['w-2.5 h-2.5 rounded-full', getStatusColor(shop.status), { 'animate-pulse': shop.status !== 'available' }]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionsLanding>
</template>
