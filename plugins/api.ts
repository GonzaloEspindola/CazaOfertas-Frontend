import { ApiFactory } from '~/repositories/factory'
import type { ApiModules } from '~/repositories/types'

declare module '#app' {
  interface NuxtApp {
    $api: ApiModules
  }
}

export default defineNuxtPlugin(() => {
  const modules = ApiFactory()

  return {
    provide: {
      api: modules,
    },
  }
})
