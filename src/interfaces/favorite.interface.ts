export interface IFavoriteItem  {
  id: number
  imageUrl: string
  name: string
  price: number
}

export interface IFavorite {
  favorite: IFavoriteItem[]
}