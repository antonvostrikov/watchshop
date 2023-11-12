import React from 'react'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import WatchBlock from '../components/WatchBlock/WatchBlock'
import { getProducts } from '../redux/slices/getProductsSlice'

const Belts:React.FC = () => {
  const dispatch = useAppDispatch()

  const [brandsFilter, setBrandsFilter] = React.useState([])
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

  const accessoriesProducts = products.filter(product => product.categoryType === 'belt')
  console.log(accessoriesProducts)
  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Ремни</h1>
            </div>
            <WatchBlock watches={accessoriesProducts} status={status} />
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Belts