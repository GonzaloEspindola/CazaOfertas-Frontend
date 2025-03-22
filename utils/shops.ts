export type Shop =
  | 'carrefour'
  | 'dia'
  | 'disco'
  | 'vea'
  | 'changomas'
  | 'jumbo'
  | 'coto'
export type OrderBy = 'priceAsc' | 'priceDesc' | 'discountDesc'

export const availableShops: Shop[] = [
  'coto',
  'carrefour',
  'dia',
  'disco',
  'vea',
  'changomas',
  'jumbo',
]

export const filterShops: Array<{
  id: number
  displayName: string
  name: string
}> = [
  {
    id: 1,
    displayName: 'Carrefour',
    name: 'carrefour',
  },
  {
    id: 2,
    displayName: 'Dia',
    name: 'dia',
  },
  {
    id: 3,
    displayName: 'Disco',
    name: 'disco',
  },
  {
    id: 4,
    displayName: 'Vea',
    name: 'vea',
  },
  {
    id: 5,
    displayName: 'Chango Más',
    name: 'changomas',
  },
  {
    id: 6,
    displayName: 'Jumbo',
    name: 'jumbo',
  },
  {
    id: 7,
    displayName: 'Coto',
    name: 'coto',
  },
]

export const getProductsByShops = async (
  productName: string,
  shops: string[]
) => {
  const nuxtApp = useNuxtApp()

  const query = {
    productName,
    shops,
  }
  return await nuxtApp.$api.product.getProducts(query)
}
