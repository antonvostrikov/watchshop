type ImageSlider = {
  img: string
}

interface IFilter {
  id: number
  filter: string
}

export interface IProduct {
  id: number
  sex: string
  brand: string
  name: string
  price: number
  imageUrl: string
  description: string
  country?: string
  model: string
  type?: string
  dial?: string
  band?: string
  waterproof?: string
  dimensions?: string
  categoryType: string
  sliderImages: ImageSlider[],
  rating?: number
  color?: string
  material?: string
  product: string
}

export interface IProductItemProps {
  id: number,
  imageUrl: string,
  price: number,
  name: string
}

export interface IProducts {
  initialProducts: IProduct[]
  products: IProduct[]
  product: IProduct[]
  status: string
}

export interface IProductsListProps {
  products: IProduct[]
  status?: string
}

export interface IProductWatchesListProps {
  model: string
  sex: string
  brand: string
  country: string
  type: string
  dial: string
  band: string
  waterproof: string
  dimensions: string
}

export interface RequireAllProducts {
  brandPage?: string
  brandsFilter?: IFilter[]
  countriesFilter?: IFilter[]
  colorsFilter?: IFilter[]
  materialsFilter?: IFilter[]
  sexFilter?: IFilter[]
  sortBy?: string
  order?: string
  minPrice?: number
  maxPrice?: number
  maxItemsPage?: number
  currentPage?: number
  productType?: string
  categoryType?: string
}
