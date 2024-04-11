import React from 'react'

import Footer from '../components/Footer/Footer'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import FilterItems from '../components/FilterItems/FilterItems'
import FilterItemsMobile from '../components/FilterItemsMobile/FilterItemsMobile'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'
import { getBrandsBeltsFilter, getColorsBeltsFilter, getMaterialsBeltsFilter } from '../redux/slices/filterSlice'
import usePagination from '../hooks/usePagination'
import Pagination from '../components/Pagination/Pagination'

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
  const [itemsOnPage, setItemsOnPage] = React.useState(3)

  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortMain.sortProperty.replace('-', '')

  const productType = "belt"

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, colorsFilter, materialsFilter, sortBy, order, minPrice, maxPrice, sexFilter, productType }))
    dispatch(getColorsBeltsFilter());
    dispatch(getBrandsBeltsFilter());
    dispatch(getMaterialsBeltsFilter());
  }, [brandsFilter, colorsFilter, materialsFilter, sortBy, order, minPrice, maxPrice, sexFilter])

  const { products, status } = useAppSelector(state => state.products)
  const { sexSortAccessories, beltsColorsFilter, beltsBrandsFilter, beltsMaterialsFilter } = useAppSelector(state => state.filter)

  const { totalPages, currentProducts } = usePagination({ currentPage, products, itemsOnPage })

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
            <WatchBlock products={currentProducts} status={status} />
            <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Belts