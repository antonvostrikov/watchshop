import React from 'react'

import Menu from '../components/Menu/Menu'
import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'

import { useAppDispatch } from '../hooks/hook'
import { getAllWatches } from '../redux/slices/getWatchesSlice'

const Watches:React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getAllWatches())
  }, [])

  return (
    <>
    <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>наручные часы</h1>
            </div>
            <FilterItems />
            <WatchBlock />
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Watches