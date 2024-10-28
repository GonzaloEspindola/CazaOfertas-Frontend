<script lang="ts" setup>
import { Field, useForm } from 'vee-validate'

interface Form {
  orderBy: OrderBy
}

const { values } = useForm<Form>({
  initialValues: { orderBy: 'priceAsc' },
})

const { orderProducts } = useCartStore()

const submitOrder = () => {
  orderProducts(values.orderBy)
}
</script>

<template>
  <div class="join justify-end text-sm">
    <div class="indicator">
      <div
        class="flex items-center bg-primary/40 px-4 join-item border border-primary"
      >
        Ordenar por
      </div>
    </div>

    <form>
      <Field
        as="select"
        name="orderBy"
        class="join-item border border-primary"
        @change="submitOrder"
      >
        <option value="priceAsc">Menor precio</option>
        <option value="priceDesc">Mayor precio</option>
        <option value="discountDesc">Mayor descuento</option>
      </Field>
    </form>
  </div>
</template>
