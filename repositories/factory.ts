import { ProductRepository } from './modules/product-repository'
import type { ApiModules } from './types'

export const ApiFactory = (): ApiModules =>
  ({
    product: new ProductRepository(),
  } as ApiModules)
