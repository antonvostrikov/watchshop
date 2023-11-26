export interface IAccessoriesName {
  id: number
  name: string
  type: string
  count: number
}

export interface IAccessoriesState {
  accessoriesName: IAccessoriesName[]
  status: string
}

export interface IProductAccessoriesListProps {
  model: string
  brand: string
  material: string
  color: string
  sex: string
  dimensions?: string
}