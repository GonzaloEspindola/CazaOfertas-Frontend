<script setup lang="ts">
import { useForm, Form, Field } from 'vee-validate'

interface Form {
  product: string
}

const filterStore = useFiltersStore()

const { values, handleSubmit } = useForm<Form>({
  initialValues: {
    product: filterStore.productName,
  },
})

const handleSubmitForm = handleSubmit(() => {
  filterStore.setProductName(values.product)
})
</script>

<template>
  <form @submit.prevent="handleSubmitForm">
    <label
      class="flex items-center gap-2 text-text-primary border border-border rounded-md p-4 transition focus-within:outline focus-within:outline-1 focus-within:outline-border hover:outline hover:outline-1 hover:outline-border"
    >
      <Field
        name="product"
        type="text"
        placeholder="Busca un producto..."
        rules="required"
        class="focus:outline-none grow bg-transparent"
      />

      <svg
        v-if="values.product === ''"
        viewBox="0 0 16 16"
        class="h-4 w-4 fill-border"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>

      <svg
        v-else
        @click="handleSubmitForm"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="h-4 w-4 stroke-border fill-white cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
        />
      </svg>
    </label>
  </form>
</template>
