import { defineStore } from 'pinia'
import { availableShops } from '~/utils/shops'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    productName: '',
    shops: availableShops as string[],
  }),
  actions: {
    setProductName(name: string) {
      this.productName = name
      this.updateUrl()
    },
    toggleShop(shop: string) {
      if (this.shops.includes(shop)) {
        this.shops = this.shops.filter((s) => s !== shop)
      } else {
        this.shops.push(shop)
      }
      this.updateUrl()
    },
    updateUrl() {
      const router = useRouter()
      router.push({
        path: '/search',
        query: { product: this.productName, shops: this.shops },
      })
    },
  },
})
