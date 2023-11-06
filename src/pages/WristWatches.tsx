import React from 'react'

import Menu from '../components/Menu/Menu'
import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getAllWatches } from '../redux/slices/getWatchesSlice'
import { getWristBrandsFilter, getWristCountriesFilter } from '../redux/slices/filterSlice'

type FiltersItems = {
  id: number
  filter: string
}

const Watches:React.FC = () => {
  const dispatch = useAppDispatch()

  const [brandsFilter, setBrandsFilter] = React.useState([])
  const [countriesFilter, setCountriesFilter] = React.useState([])
  const [sexFilter, setSexFilter] = React.useState([])
  const { watches, status } = useAppSelector(state => state.watches)

  React.useEffect(() => {
    dispatch(getAllWatches({ brandsFilter, countriesFilter, sexFilter }))
    dispatch(getWristBrandsFilter())
    dispatch(getWristCountriesFilter())
  }, [brandsFilter, countriesFilter, sexFilter])

  const { wristBrandsFilter, wristCountriesFilter, sexSort } = useAppSelector(state => state.filter)

  return (
    <>
    <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>наручные часы</h1>
            </div>
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
            />
            <WatchBlock watches={watches} status={status}/>
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Watches