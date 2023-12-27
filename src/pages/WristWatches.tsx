import React from 'react'

import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'
import { getWristBrandsFilter, getWristCountriesFilter, setChangePage } from '../redux/slices/filterSlice'
import FilterItemsMobile from '../FilterItemsMobile/FilterItemsMobile'

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

  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortMain.sortProperty.replace('-', '')
  
  const { pageCount } = useAppSelector(state => state.filter)

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice }))
    dispatch(getWristBrandsFilter())
    dispatch(getWristCountriesFilter())
  }, [brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, pageCount])

  const { wristBrandsFilter, wristCountriesFilter, sexSort } = useAppSelector(state => state.filter)
  const { products, status } = useAppSelector(state => state.products)

  const productsWrist = products.filter(product => product.categoryType === 'default' || product.categoryType === 'premium')

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
            <WatchBlock products={productsWrist} status={status} />
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Watches