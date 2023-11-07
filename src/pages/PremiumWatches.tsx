import React from "react";

import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import FilterItems from "../components/FilterItems/FilterItems";
import WatchBlock from "../components/WatchBlock/WatchBlock";

import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { getPremiumWatches } from "../redux/slices/getWatchesSlice";
import { getPremiumBrandsFilter, getPremiumCountriesFilter } from "../redux/slices/filterSlice";

const PremiumWatches: React.FC = () => { 
  const dispatch = useAppDispatch()

  const [brandsFilter, setBrandsFilter] = React.useState([])
  const [countriesFilter, setCountriesFilter] = React.useState([])
  const [sexFilter, setSexFilter] = React.useState([])
  const [sortMain, setSortMain] = React.useState({ "name": "По популярности", "sortProperty": "rating" })
  const [sortItems, setSortItems] = React.useState([
    { "name": "По популярности", "sortProperty": "rating" },
    { "name": "От дорогих к дешевым", "sortProperty": "-price" },
    { "name": "От дешевых к дорогим", "sortProperty": "price" }
  ])
  const [minPrice, setMinPrice] = React.useState(0)
  const [maxPrice, setMaxPrice] = React.useState(0)

  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'
  const sortBy = sortMain.sortProperty.replace('-', '')

  React.useEffect(() => {
    dispatch(getPremiumWatches({ brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice }))
    dispatch(getPremiumBrandsFilter())
    dispatch(getPremiumCountriesFilter())
  }, [brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice])

  const { premiumWatches, status } = useAppSelector(state => state.watches)
  const { premiumBrandsFilter, premiumCountriesFilter, sexSort } = useAppSelector(state => state.filter)

  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>премиум часы</h1>
            </div>
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
            <WatchBlock watches={premiumWatches} status={status}/>
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PremiumWatches