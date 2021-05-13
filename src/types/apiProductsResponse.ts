import { SearchResult } from '~/components/SearchResults/types'

export type ProductsResponse = {
  products: SearchResult[]
  totalPrice: string
}

export type APiSearchResult = {
  id: number
  price: number
  title: string
}
