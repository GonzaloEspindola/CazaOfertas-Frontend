export interface PromotionItem {
  discount: string
  detail: string
  image: PromotionImage
  footer: string
  shop: string
}

interface PromotionImage {
  image: string
  color: string
}
