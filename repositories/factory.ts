import { ProductRepository } from './modules/product-repository'
import { PromotionsRepository } from './modules/promotions-repository'
import type { ApiModules } from './types'

export const ApiFactory = (): ApiModules =>
  ({
    product: new ProductRepository(),
    promotions: new PromotionsRepository(),
  } as ApiModules)
