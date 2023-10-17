import React from 'react'

import Menu from '../components/Menu/Menu'
import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getAllWatches } from '../redux/slices/getWatchesSlice'

const Watches:React.FC = () => {
  const dispatch = useAppDispatch()

  const {watches, status} = useAppSelector(state => state.watches)
  const { sortProperty } = useAppSelector(state => state.filter.sort)

  const sortBy = sortProperty.replace('-', '')
  const order = sortProperty.includes('-') ? 'desc' : 'asc'

  React.useEffect(() => {
    dispatch(getAllWatches({ sortBy, order }))
  }, [sortBy, order])

  const brandsListWatches: string[] = []
  const countriesListWatches: string[] = []

  watches.map(watch => {
    brandsListWatches.push(watch.brand)
    countriesListWatches.push(watch.country)
  })

  const brandsListFilter = Array.from(new Set([...brandsListWatches]))
  const countriesListFilter = Array.from(new Set([...countriesListWatches]))

  return (
    <>
    <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>наручные часы</h1>
            </div>
            <FilterItems brands={brandsListFilter} countries={countriesListFilter}/>
            <WatchBlock watches={watches} status={status}/>
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Watches