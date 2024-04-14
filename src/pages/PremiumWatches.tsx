import React from "react";

import FilterItemsMobile from "../components/FilterItemsMobile/FilterItemsMobile";
import Footer from "../components/Footer/Footer";
import FilterItems from "../components/FilterItems/FilterItems";
import WatchBlock from "../components/WatchBlock/WatchBlock";

import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { getProducts } from "../redux/slices/getProductsSlice";
import { getPremiumBrandsFilter, getPremiumCountriesFilter } from "../redux/slices/filterSlice";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination/Pagination";

const PremiumWatches: React.FC = () => { 
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

  const categoryType = "premium"
  const productType = "watch"

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, productType, categoryType }))
    dispatch(getPremiumBrandsFilter())
    dispatch(getPremiumCountriesFilter())
  }, [brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice, categoryType, productType, dispatch])

  const { products, status } = useAppSelector(state => state.products)
  const { premiumBrandsFilter, premiumCountriesFilter, sexSort } = useAppSelector(state => state.filter)

  const { totalPages, currentProducts } = usePagination({ currentPage, itemsOnPage, products })

  return (
    <>
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>премиум часы</h1>
            </div>
            <FilterItemsMobile 
              brands={premiumBrandsFilter} 
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              countries={premiumCountriesFilter}
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
              brands={premiumBrandsFilter} 
              brandsFilters={brandsFilter}
              brandsFiltersHandler={setBrandsFilter}
              countries={premiumCountriesFilter}
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
            <WatchBlock products={currentProducts} status={status}/>
            <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PremiumWatches