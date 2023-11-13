import React from 'react'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProducts } from '../redux/slices/getProductsSlice'
import FilterItemsAccessories from '../components/FilterItems/FilterItemsAccessories'

const Covers:React.FC = () => {
  const dispatch = useAppDispatch()

  const [sexFilter, setSexFilter] = React.useState([])
  const [brandsFilter, setBrandsFilter] = React.useState([])
  const [colorsFilter, setColorsFilter] = React.useState([])
  const [materialsFilter, setMaterialsFilter] = React.useState([])
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
    dispatch(getProducts({ brandsFilter, sortBy, order, minPrice, maxPrice }))
  }, [])

  const { products, status } = useAppSelector(state => state.products)
  const { sexSort } = useAppSelector(state => state.filter)

  const accessoriesProducts = products.filter(product => product.categoryType === 'cover')
 
  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Чехлы</h1>
            </div>
            <FilterItemsAccessories 
              sex={sexSort}
              sexFilters={sexFilter}
              sexFiltersHandler={setSexFilter}
              brandsFilter={brandsFilter}
              brandsFilterHandler={setBrandsFilter}
              materialsFilter={materialsFilter}
              materialsFilterHandler={setMaterialsFilter}
              colorsFilter={colorsFilter}
              colorsFilterHandler={setColorsFilter}
              sort={sortItems}
              sortMain={sortMain}
              sortMainHandler={setSortMain}
              minPriceHandler={setMinPrice}
              maxPriceHandler={setMaxPrice}
            />
            <WatchBlock watches={accessoriesProducts} status={status} />
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Covers