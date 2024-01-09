import React from 'react'

import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'
import { getWristBrandsFilter, getWristCountriesFilter, setChangePage } from '../redux/slices/filterSlice'
import FilterItemsMobile from '../FilterItemsMobile/FilterItemsMobile'
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
  const [maxItemsPage, setMaxItemsPage] = React.useState(3)
  const [countPages, setCountPages] = React.useState(4)
  const [filtered, setFiltered] = React.useState(false)

  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortMain.sortProperty.replace('-', '')
  
  const { pageCount } = useAppSelector(state => state.filter)

  const productType = "watch"

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, productType, currentPage, maxItemsPage }))
    dispatch(getWristBrandsFilter())
    dispatch(getWristCountriesFilter())
  }, [brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, pageCount, maxItemsPage, currentPage, productType, maxItemsPage, currentPage])

  const { wristBrandsFilter, wristCountriesFilter, sexSort } = useAppSelector(state => state.filter)
  const { products, status } = useAppSelector(state => state.products)
  const { initialProducts } = useAppSelector(state => state.products)

  const filteredProducts = initialProducts.filter(product => product.product === 'watch')
  
  React.useEffect(() => {
    setCountPages(Math.ceil(filteredProducts.length / maxItemsPage))
  }, [products])
  
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
            <WatchBlock products={products} status={status} />
            { filtered ? <></> : <Pagination countPages={countPages} changeCurrentPage={setCurrentPage} /> }
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Watches