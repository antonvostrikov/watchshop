import React from 'react'

import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'
import { getWristBrandsFilter, getWristCountriesFilter } from '../redux/slices/filterSlice'
import FilterItemsMobile from '../components/FilterItemsMobile/FilterItemsMobile'
import usePagination from '../hooks/usePagination'
import Pagination from '../components/Pagination/Pagination'

const Watches:React.FC = () => {
  const dispatch = useAppDispatch()

  const [brandsFilter, setBrandsFilter] = React.useState([])
  const [countriesFilter, setCountriesFilter] = React.useState([])
  const [sexFilter, setSexFilter] = React.useState([])
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
  const productType = "watch"

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, productType }))
    dispatch(getWristBrandsFilter())
    dispatch(getWristCountriesFilter())
  }, [brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, productType, dispatch])

  const { wristBrandsFilter, wristCountriesFilter, sexSort } = useAppSelector(state => state.filter)
  const { products, status } = useAppSelector(state => state.products)

  const { totalPages, currentProducts } = usePagination({ currentPage, itemsOnPage, products })

  return (
    <>
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>наручные часы</h1>
            </div>
            <FilterItemsMobile 
              brands={wristBrandsFilter} 
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              countries={wristCountriesFilter}
              countriesFilters={countriesFilter} 
              countriesFiltersHandler={setCountriesFilter}
              sex={sexSort}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <FilterItems 
              brands={wristBrandsFilter} 
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              countries={wristCountriesFilter}
              countriesFilters={countriesFilter} 
              countriesFiltersHandler={setCountriesFilter}
              sex={sexSort}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <WatchBlock products={currentProducts} status={status} />
            <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Watches