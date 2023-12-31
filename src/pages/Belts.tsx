import React from 'react'

import Footer from '../components/Footer/Footer'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import FilterItems from '../components/FilterItems/FilterItems'
import FilterItemsMobile from '../FilterItemsMobile/FilterItemsMobile'
import Pagination from '../components/Pagination/Pagination'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'
import { getBrandsBeltsFilter, getColorsBeltsFilter, getMaterialsBeltsFilter } from '../redux/slices/filterSlice'

const Belts:React.FC = () => {
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
  const [currentPage, setCurrentPage] = React.useState(1)
  const [maxItemsPage, setMaxItemsPage] = React.useState(6)
  const [countPages, setCountPages] = React.useState(1)

  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortMain.sortProperty.replace('-', '')

  const productType = "belt"

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, colorsFilter, materialsFilter, sortBy, order, minPrice, maxPrice, sexFilter, maxItemsPage, currentPage, productType }))
    dispatch(getColorsBeltsFilter());
    dispatch(getBrandsBeltsFilter());
    dispatch(getMaterialsBeltsFilter());
  }, [brandsFilter, colorsFilter, materialsFilter, sortBy, order, minPrice, maxPrice, sexFilter])

  const { products, status } = useAppSelector(state => state.products)
  const { sexSortAccessories, beltsColorsFilter, beltsBrandsFilter, beltsMaterialsFilter } = useAppSelector(state => state.filter)
  
  React.useEffect(() => {
    setCountPages(Math.ceil(products.length / maxItemsPage))
  }, [products])

  return (
    <>
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Ремни</h1>
            </div>
            <FilterItemsMobile 
              sex={sexSortAccessories}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              brands={beltsBrandsFilter}
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              materials={beltsMaterialsFilter}
              materialsFilter={materialsFilter}
              materialsFiltersHandler={setMaterialsFilter}
              colors={beltsColorsFilter}
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
              brands={beltsBrandsFilter}
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              materials={beltsMaterialsFilter}
              materialsFilter={materialsFilter}
              materialsFiltersHandler={setMaterialsFilter}
              colors={beltsColorsFilter}
              colorsFilters={colorsFilter}
              colorsFiltersHandler={setColorsFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <WatchBlock products={products} status={status} />
            <Pagination countPages={countPages} changeCurrentPage={setCurrentPage} />
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Belts