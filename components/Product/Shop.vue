<script setup lang="ts">
interface Props {
  shop: string
  link: string
}

const { shop, link } = defineProps<Props>()

const baseUrlMap: Record<string, string> = {
  carrefour: 'https://www.carrefour.com.ar',
  dia: '',
  disco: 'https://www.disco.com.ar',
  vea: 'https://www.vea.com.ar',
  changomas: 'https://www.masonline.com.ar',
  jumbo: 'https://www.jumbo.com.ar',
}
</script>

<template>
  <UiTooltip text="Buscar en el supermercado">
    <a
      :href="`${baseUrlMap[shop]}${link}`"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center border-t-[1px] border-border pt-4 pb-2"
    >
      <img
        class="h-6"
        data-tip="Buscar"
        :src="`/assets/logos/${shop}.webp`"
        :alt="`Logo del supermercado ${shop}`"
      />
    </a>
  </UiTooltip>
</template>
