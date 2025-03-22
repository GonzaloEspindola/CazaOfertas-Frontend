import { HttpRepository } from '../http-repository'
import type { Product, Query } from '../types/product'
import type { PromotionItem } from '../types/Promotion'

export class PromotionsRepository extends HttpRepository {
  private RESOURCE = 'promotions'

  async getPromotions(): Promise<PromotionItem[][]> {
    return await this.fetch<PromotionItem[][]>(`${this.RESOURCE}/all`, {
      method: 'GET',
    })
  }
}
