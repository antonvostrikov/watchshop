export interface ICity {
  id: number
  city: string
}

export interface ICityState {
  mainCity: ICity[]
  cities: ICity[]
}
