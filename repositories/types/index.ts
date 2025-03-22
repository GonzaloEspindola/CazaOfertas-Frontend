import type { ProductRepository } from '../modules/product-repository'
import type { PromotionsRepository } from '../modules/promotions-repository'

export interface ApiModules {
  product: ProductRepository
  promotions: PromotionsRepository
}
