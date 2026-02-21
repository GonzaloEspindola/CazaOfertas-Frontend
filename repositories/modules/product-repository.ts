import { HttpRepository } from '../http-repository'
import type { Product, Query } from '../types/product'

export class ProductRepository extends HttpRepository {
  private RESOURCE = 'products'

  async getProducts(query: Query): Promise<Product[]> {
    return await this.fetch<Product[]>(`${this.RESOURCE}/search`, {
      method: 'GET',
      query,
    })
  }

  async getStoresStatus(): Promise<any> {
    return await this.fetch<any>(`${this.RESOURCE}/stores/status`, {
      method: 'GET',
    })
  }
}

