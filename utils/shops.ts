export type Shop = 'carrefour' | 'dia' | 'disco' | 'vea' | 'changomas' | 'jumbo'
export type OrderBy = 'priceAsc' | 'priceDesc' | 'discountDesc'

export const availableShops: Shop[] = [
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
    id: 5,
    displayName: 'Jumbo',
    name: 'jumbo',
  },
]
