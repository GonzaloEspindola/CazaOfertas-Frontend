<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'

interface Props {
  options: string[]
  modelValue: string[]
}

const props = defineProps<Props>()
const emit = defineEmits<{ 'update:modelValue': (value: string[]) => void }>()

// Mantener la sincronización entre el prop modelValue y el estado local
const selectedOptions = ref<string[]>([...props.modelValue])

watch(
  () => props.modelValue,
  (newVal) => {
    selectedOptions.value = [...newVal]
  }
)

const toggleOption = (event: Event) => {
  const selectedValues = Array.from(
    (event.target as HTMLSelectElement).selectedOptions,
    (option) => option.value
  )
  emit('update:modelValue', selectedValues)
}
</script>

<template>
  <div class="w-full max-w-sm mx-auto">
    <select
      multiple
      class="border rounded-lg p-2 w-full"
      @change="toggleOption"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
