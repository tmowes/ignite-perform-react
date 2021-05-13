export type SearchResultsProps = {
  results: SearchResult[]
  totalPrice: string
  onAddToWhishList: (id: number) => Promise<void>
}

export type SearchResult = {
  id: number
  price: number
  title: string
  formatedPrice: string
}
