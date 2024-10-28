export type Shop = 'carrefour' | 'dia'
export type OrderBy = 'priceAsc' | 'priceDesc' | 'discountDesc'

export const availableShops: Shop[] = ['carrefour', 'dia']

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
]
