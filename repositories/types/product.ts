export interface Query {
  productName: string
  shops: string[]
}

export interface Product {
  shop: string
  productName: string
  description: string
  productReference: string
  brand: string
  listPriceValue: number
  sellingPriceValue: number
  percentDiscount: number
  imageUrl: string
}
