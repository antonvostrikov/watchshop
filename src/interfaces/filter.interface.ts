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
  brands: IFilterItems[]
  countries: IFilterItems[]
  sex: IFilterItems[]
  brandsFilters: IFilterItems[]
  countriesFilters: IFilterItems[]
  sexFilters: IFilterItems[]
  brandsFiltersHandler: (brandsFilters: any) => void
  countriesFiltersHandler: (countriesFilters: any) => void
  sexFiltersHandler: (sexFilters: any) => void
  sort: ISortItems[]
  sortMain: ISortItems
  sortMainHandler: (sort: any) => void
  minPrice: number
  maxPrice: number
  minPriceHandler: (minPrice: number) => void
  maxPriceHandler: (maxPrice: number) => void
}