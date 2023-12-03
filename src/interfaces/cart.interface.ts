export interface ICartProduct {
  id: number
  imageUrl: string
  name: string
  sum: number
  price: number
  total: number
}

export interface ICart {
  cart: ICartProduct[]
  total: number
  count: number
}