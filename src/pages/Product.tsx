import React from 'react'

import ProductItem from '../components/ProductItem/ProductItem'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useNavigate, useParams } from 'react-router-dom'

import LeftArrowSvg from '../ímg/arrow-left.svg'

import { getProduct } from '../redux/slices/getProductsSlice'
import { addProductToCart } from '../redux/slices/cartSlice'
import { addToFavorite } from '../redux/slices/favoriteSlice'

import { IProduct } from '../interfaces/product.interface'

import { AppContext } from '../App'

interface IProductProps {
  setIsOpen: (isOpen: boolean) => void
}

const Product:React.FC<IProductProps> = ({ setIsOpen }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { searchPopup, setSearchPopup } = React.useContext(AppContext)


  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getProduct(Number(id)))
    setIsOpen(false)
    setSearchPopup(false)
  }, [id])

  const { product, status } = useAppSelector(state => state.products)

  const addToCartHandler = (item: IProduct) => {
    const productToCart = {
      id: Number(id),
      imageUrl: item.imageUrl,
      name: item.name,
      sum: 1,
      price: item.price,
      total: item.price
    }

    dispatch(addProductToCart(productToCart))
  }

  const addToFavoriteHandler = (item: IProduct) => {
    const productToFavorite = {
      id: Number(id),
      imageUrl: item.imageUrl,
      name: item.name,
      sum: 1,
      price: item.price
    }

    dispatch(addToFavorite(productToFavorite))
  }

  return (
    <>
      <section className="section-product">
        <div className="container-watches">
          <div className="section-product__back">
            <span onClick={() => navigate(-1)}><img src={LeftArrowSvg} alt="" />Назад</span>
          </div>
          { status && product.map(item => (
            <ProductItem 
              item={item} 
              addToFavorite={addToFavoriteHandler}
              addToCart={addToCartHandler}
            />
          )) }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product