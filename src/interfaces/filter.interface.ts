interface IFilterItems {
  id: number
  filter: string
}

export interface ISort {
  wristBrandsFilter: IFilterItems[]
  premiumBrandsFilter: IFilterItems[]
  wristCountriesFilter: IFilterItems[]
  premiumCountriesFilter: IFilterItems[]
  sexSort: IFilterItems[]
  sexSortAccessories: IFilterItems[]
  beltsBrandsFilter: IFilterItems[]
  beltsColorsFilter: IFilterItems[]
  beltsMaterialsFilter: IFilterItems[]
  coversBrandsFilter: IFilterItems[]
  coversColorsFilter: IFilterItems[]
  coversMaterialsFilter: IFilterItems[]
  pageCount: number
}

interface IFilterItems {
  id: number
  filter: string
}

interface ISortItems {
  name: string
  sortProperty: string
}

export interface IFilterSort  {
  sex?: IFilterItems[]
  sexFilters?: IFilterItems[]
  sexFiltersHandler?: (sexFilters: any) => void
  brands?: IFilterItems[]
  brandsFilters?: IFilterItems[]
  brandsFiltersHandler?: (brandsFilter: any) => void
  materials?: IFilterItems[]
  materialsFilter?: IFilterItems[]
  materialsFiltersHandler?: (materialsFilter: any) => void
  colors?: IFilterItems[]
  colorsFilters?: IFilterItems[]
  colorsFiltersHandler?: (colorsFilter: any) => void 
  countries?: IFilterItems[]
  countriesFilters?: IFilterItems[] 
  countriesFiltersHandler?: (countriesFilters: any) => void
  sort: ISortItems[]
  sortMain: ISortItems
  sortMainHandler: (sort: any) => void
  minPrice?: number
  maxPrice?: number
  minPriceHandler: (minPrice: number) => void
  maxPriceHandler: (maxPrice: number) => void
}