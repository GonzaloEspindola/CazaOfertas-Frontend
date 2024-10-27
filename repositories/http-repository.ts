import { useRuntimeConfig, useFetch } from '#app'

export class HttpRepository {
  private baseUrl: string

  constructor() {
    const config = useRuntimeConfig()
    this.baseUrl = config.public.apiBaseUrl
  }

  protected async fetch<T>(endpoint: string, options: any = {}) {
    const { data, error } = await useFetch<any>(
      `${this.baseUrl}/${endpoint}`,
      options
    )
    if (error.value) {
      throw new Error(`Error fetching data from ${endpoint}: ${error.value}`)
    }
    return data.value
  }
}
