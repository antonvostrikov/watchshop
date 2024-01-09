import React from 'react'

import FilterItemsMobile from '../FilterItemsMobile/FilterItemsMobile'
import FilterItems from '../components/FilterItems/FilterItems'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import Footer from '../components/Footer/Footer'
import Pagination from '../components/Pagination/Pagination'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'

const Casio:React.FC = () => {
  const [sexFilter, setSexFilter] = React.useState([])
  const [sortMain, setSortMain] = React.useState({ "name": "По популярности", "sortProperty": "-rating" })
  const [sortItems, setSortItems] = React.useState([
    { "name": "По популярности", "sortProperty": "-rating" },
    { "name": "От дорогих к дешевым", "sortProperty": "-price" },
    { "name": "От дешевых к дорогим", "sortProperty": "price" }
  ])
  const [minPrice, setMinPrice] = React.useState(0)
  const [maxPrice, setMaxPrice] = React.useState(0)
  const [brandsFilter, setBrandsFilter] = React.useState([{ id: 1, filter: 'Casio' }])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [maxItemsPage, setMaxItemsPage] = React.useState(6)
  const [countPages, setCountPages] = React.useState(1)

  const dispatch = useAppDispatch()

  const sortBy = sortMain.sortProperty.replace('-', '')
  const order = sortMain.sortProperty.includes('-') ? 'desc' : 'asc'

  React.useEffect(() => {
    dispatch(getProducts({ brandsFilter, sexFilter, minPrice, maxPrice, sortBy, order, maxItemsPage, currentPage }))
  }, [sexFilter, minPrice, maxPrice, sortBy, order])

  const { products, status } = useAppSelector(state => state.products)
  const { sexSort } = useAppSelector(state => state.filter)

  React.useEffect(() => {
    setCountPages(Math.ceil(products.length / maxItemsPage))
  }, [products])

  return (
    <>
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Casio</h1>
            </div>
            <FilterItemsMobile 
              sex={sexSort}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <FilterItems 
              sex={sexSort}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <WatchBlock products={products} status={status} />
            <Pagination countPages={countPages} changeCurrentPage={setCurrentPage} />
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Casio