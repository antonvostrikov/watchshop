import React from 'react'

import Menu from '../components/Menu/Menu'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getBrandWatches } from '../redux/slices/getWatchesSlice'
import FilterItemsProduct from '../components/FilterItems/FIlterItemsProduct'

const Titoni:React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getBrandWatches('Titoni'))
  }, [])

  const { brand, status } = useAppSelector(state => state.watches)

  return (
    <>
    <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Titoni</h1>
            </div>
            <FilterItemsProduct />
            <WatchBlock watches={brand} status={status}/>
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Titoni