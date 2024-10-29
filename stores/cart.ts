import { defineStore } from 'pinia'
import { availableShops } from '#imports'
import type { Product } from '~/repositories/types/product'
import type { OrderBy } from '~/utils/shops'

export interface ProductCart {
  preShop: string
  shop: string
  productName: string
  description: string
  productReference: string
  brand: string
  listPriceValue: number
  sellingPriceValue: number
  percentDiscount: number
  imageUrl: string
  link: string
  quantity: number
  noAvailable: boolean
}

export interface CartItem {
  products: Array<ProductCart>
  totalPrice: number
  needReview: boolean
}

export interface Cart {
  [storeName: string]: CartItem
}

interface ProductByStore {
  [storeName: string]:
    | {
        product: ProductCart
      }
    | undefined
}

const carts: Cart = availableShops.reduce((acc: Cart, store: string) => {
  acc['carritoargento'] = {
    products: [],
    totalPrice: 0,
    needReview: false,
  }

  acc[store] = {
    products: [],
    totalPrice: 0,
    needReview: false,
  }
  return acc
}, {})

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as Product[],
    carts: carts,
  }),

  actions: {
    setProducts(products: Product[]) {
      this.products = products

      products.forEach((product) => {
        this.carts[product.shop].products.find((prod) => {
          if (prod.productReference === product.productReference) {
            product.addedToCart = true
          }
        })
      })
    },

    addProductToCarts(product: Product) {
      const productByStore: ProductByStore = {}

      Object.keys(this.carts).forEach((store) => {
        productByStore[store] = undefined
      })

      productByStore['carritoargento'] = {
        product: {
          ...product,
          quantity: 1,
          preShop: product.shop,
          noAvailable: false,
        },
      }

      this.products.forEach((prod) => {
        const findCoincidenceProduct =
          prod.productReference === product.productReference

        if (findCoincidenceProduct) {
          productByStore[prod.shop] = {
            product: {
              ...prod,
              quantity: 1,
              preShop: prod.shop,
              noAvailable: false,
            },
          }

          prod.addedToCart = true
        } else if (!productByStore[prod.shop]) {
          productByStore[prod.shop] = {
            product: {
              ...product,
              quantity: 0,
              preShop: '',
              noAvailable: true,
            },
          }
        }
      })

      Object.keys(productByStore).forEach((store) => {
        if (productByStore[store]) {
          const { product } = productByStore[store]

          if (product) {
            this.carts[store].products.push(product)

            if ('sellingPriceValue' in product && 'quantity' in product) {
              this.carts[store].totalPrice +=
                product.sellingPriceValue * product.quantity
            }
          }
        }
      })

      Object.keys(this.carts).forEach((store) => {
        this.carts[store].needReview = this.carts[store].products.some(
          (product) => 'noAvailable' in product && product.noAvailable
        )
      })
    },

    removeProductFromCart(store: string, productReference: string) {
      if (!this.carts[store]) return

      this.carts[store].products = this.carts[store].products.filter(
        (product) =>
          'productReference' in product &&
          product.productReference !== productReference
      )

      this.carts[store].totalPrice = this.carts[store].products.reduce(
        (sum, prod) =>
          'sellingPriceValue' in prod
            ? sum + prod.sellingPriceValue * prod.quantity
            : sum,
        0
      )
    },

    addQuantityToProduct(store: string, productReference: string) {
      if (!this.carts[store]) return

      this.carts[store].products = this.carts[store].products.map((product) => {
        if (
          'productReference' in product &&
          product.productReference === productReference
        ) {
          product.quantity++
        }
        return product
      })

      this.carts[store].totalPrice = this.carts[store].products.reduce(
        (sum, prod) =>
          'sellingPriceValue' in prod
            ? sum + prod.sellingPriceValue * prod.quantity
            : sum,
        0
      )
    },

    removeQuantityToProduct(store: string, productReference: string) {
      if (!this.carts[store]) return

      this.carts[store].products = this.carts[store].products.map((product) => {
        if (
          'productReference' in product &&
          product.productReference === productReference
        ) {
          product.quantity--
        }
        return product
      })

      this.carts[store].totalPrice = this.carts[store].products.reduce(
        (sum, prod) =>
          'sellingPriceValue' in prod
            ? sum + prod.sellingPriceValue * prod.quantity
            : sum,
        0
      )
    },

    orderProducts(orderBy: OrderBy) {
      this.products.sort((a, b) => {
        switch (orderBy) {
          case 'priceAsc':
            return a.sellingPriceValue - b.sellingPriceValue
          case 'priceDesc':
            return b.sellingPriceValue - a.sellingPriceValue
          case 'discountDesc':
            return b.percentDiscount - a.percentDiscount
          default:
            return 0
        }
      })
    },
  },

  getters: {
    getCartForStore: (state) => (store: string) =>
      state.carts[store] || { products: [], totalPrice: 0 },
    compareCarts: (state) => {
      return Object.keys(state.carts).map((store) => ({
        store,
        totalPrice: state.carts[store].totalPrice,
        products: state.carts[store].products,
      }))
    },
  },
})
