<script setup lang="ts">
import { ref, watch } from 'vue'

interface Option {
  id: string
  name: string
  displayName: string
}

interface Props {
  text?: string
  options: Option[]
}

interface Emits {
  (e: 'update:modelValue', value: Option[]): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const selectedOptions = ref<Option[]>([])
const showOptions = ref(false)
const allSelected = ref(false)

const selectOption = (option: Option) => {
  const index = selectedOptions.value.findIndex((m) => m.id === option.id)
  if (index !== -1) {
    selectedOptions.value.splice(index, 1)
  } else {
    selectedOptions.value.push(option)
  }

  emit('update:modelValue', selectedOptions.value)
}

const selectAll = () => {
  if (allSelected.value) {
    selectedOptions.value = []
  } else {
    selectedOptions.value = [...props.options]
  }

  emit('update:modelValue', selectedOptions.value)
}

watch(selectedOptions, (newVal) => {
  allSelected.value = newVal.length === props.options.length
})
</script>

<template>
  <div class="relative w-full">
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
        {{
          selectedOptions.map((option) => option.displayName).join(', ') ||
          (props.text ?? 'Selecciona una opción')
        }}
        <slot name="icon"> </slot>
      </div>
    </label>

    <transition name="entrance">
      <section
        v-show="showOptions"
        class="flex flex-col items-center p-4 top-16 left-0 text-text-primary border border-border rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-border hover:outline hover:outline-1 hover:outline-border absolute z-[100] bg-[#ffffff] shadow-lg select-none w-full"
      >
        <li
          :key="'0'"
          class="gap-2 inline-block rounded w-full cursor-pointer hover:bg-primary/20"
        >
          <label
            class="flex gap-2 p-2 items-center cursor-pointer text-text-primary"
          >
            <input
              class="w-5 h-5 rounded-md accent-primary"
              type="checkbox"
              :checked="allSelected"
              @change="selectAll"
            />
            <span> Seleccionar todas las opciones</span>
          </label>
        </li>

        <li
          v-for="option in props.options"
          :key="option.id"
          class="gap-2 inline-block rounded w-full cursor-pointer hover:bg-primary/20"
        >
          <label
            class="flex gap-2 p-2 items-center cursor-pointer text-text-primary"
          >
            <input
              class="w-5 h-5 rounded-md accent-primary"
              type="checkbox"
              :checked="selectedOptions.some((m) => m.id === option.id)"
              @change="selectOption(option)"
            />
            <span>{{ option.displayName }}</span>
          </label>
        </li>
      </section>
    </transition>
  </div>
</template>
