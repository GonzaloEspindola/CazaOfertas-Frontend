import { HttpRepository } from '../http-repository'
import type { PromotionItem } from '../types/promotion'

export class PromotionsRepository extends HttpRepository {
  private RESOURCE = 'promotions'

  async getPromotions(): Promise<PromotionItem[][]> {
    return await this.fetch<PromotionItem[][]>(`${this.RESOURCE}/all`, {
      method: 'GET',
    })
  }
}
