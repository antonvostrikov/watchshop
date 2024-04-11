import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'

import FilterItems from '../components/FilterItems/FilterItems'
import FilterItemsMobile from '../components/FilterItemsMobile/FilterItemsMobile'
import Footer from '../components/Footer/Footer'
import WatchBlock from '../components/WatchBlock/WatchBlock'

import { getBrandsCoversFilter, getColorsCoversFilter, getMaterialsCoversFilter } from '../redux/slices/filterSlice'

const Covers:React.FC = () => {
  const dispatch = useAppDispatch()

  const [sexFilter, setSexFilter] = React.useState([])
  const [brandsFilter, setBrandsFilter] = React.useState([])
  const [colorsFilter, setColorsFilter] = React.useState([])
  const [materialsFilter, setMaterialsFilter] = React.useState([])
  const [sortMain, setSortMain] = React.useState({ "name": "По популярности", "sortProperty": "-rating" })
  const [sortItems, setSortItems] = React.useState([
    { "name": "По популярности", "sortProperty": "-rating" },
    { "name": "От дорогих к дешевым", "sortProperty": "-price" },
    { "name": "От дешевых к дорогим", "sortProperty": "price" }
  ])
  const [minPrice, setMinPrice] = React.useState(0)
  const [maxPrice, setMaxPrice] = React.useState(0)

  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortMain.sortProperty.replace('-', '')

  const productType = "cover"

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, sortBy, order, minPrice, maxPrice, colorsFilter, materialsFilter, sexFilter, productType }));
    dispatch(getBrandsCoversFilter());
    dispatch(getColorsCoversFilter());
    dispatch(getMaterialsCoversFilter());
  }, [brandsFilter, sortBy, order, minPrice, maxPrice, colorsFilter, materialsFilter, sexFilter, productType])

  const { products, status } = useAppSelector(state => state.products)
  const { sexSortAccessories, coversBrandsFilter, coversColorsFilter, coversMaterialsFilter } = useAppSelector(state => state.filter)

  return (
    <>
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Чехлы</h1>
            </div>
            <FilterItemsMobile 
              sex={sexSortAccessories}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              brands={coversBrandsFilter}
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              materials={coversMaterialsFilter}
              materialsFilter={materialsFilter}
              materialsFiltersHandler={setMaterialsFilter}
              colors={coversColorsFilter}
              colorsFilters={colorsFilter}
              colorsFiltersHandler={setColorsFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <FilterItems 
              sex={sexSortAccessories}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              brands={coversBrandsFilter}
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              materials={coversMaterialsFilter}
              materialsFilter={materialsFilter}
              materialsFiltersHandler={setMaterialsFilter}
              colors={coversColorsFilter}
              colorsFilters={colorsFilter}
              colorsFiltersHandler={setColorsFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <WatchBlock products={products} status={status} />
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Covers