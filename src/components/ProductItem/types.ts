export type ProductItemProps = {
  product: ProductItem
  onAddToWhishList: (id: number) => Promise<void>
}

type ProductItem = {
  id: number
  price: number
  title: string
  formatedPrice: string
}
