<script setup lang="ts">
import { useForm, Form, Field } from 'vee-validate'

interface Form {
  product: string
}

const { values, handleSubmit } = useForm<Form>()

const handleSubmitForm = handleSubmit(() => {
  useFiltersStore().setProductName(values.product)
})
</script>

<template>
  <form @submit.prevent="handleSubmitForm">
    <label class="input input-bordered flex items-center gap-2">
      <Field
        name="product"
        type="text"
        class="grow"
        placeholder="Busca un producto..."
        rules="required"
      />

      <div class="tooltip tooltip-right" data-tip="Buscar">
        <svg
          v-if="values.product === undefined || values.product === ''"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>

        <kbd
          v-else
          class="kbd kbd-sm hover:shadow-md hover:cursor-pointer transition-all"
          @click="handleSubmitForm"
        >
          <span class="opacity-70"> ↵ </span>
        </kbd>
      </div>
    </label>
  </form>
</template>
