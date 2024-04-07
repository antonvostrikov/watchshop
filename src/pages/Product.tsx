import React from 'react'

import ProductItem from '../components/ProductItem/ProductItem'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useNavigate, useParams } from 'react-router-dom'

import LeftArrowSvg from '../ímg/arrow-left.svg'

import { getProduct } from '../redux/slices/getProductsSlice'
import { addProductToCart, deleteProductFromCart } from '../redux/slices/cartSlice'
import { addToFavorite, deleteProductFromFavorite } from '../redux/slices/favoriteSlice'

import { IProduct } from '../interfaces/product.interface'

import { AppContext } from '../App'

interface IProductProps {
  setIsOpen: (isOpen: boolean) => void
}

const Product:React.FC<IProductProps> = ({ setIsOpen }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [isInCart, setIsInCart] = React.useState(false)
  const [isInFavorite, setIsInFavorite] = React.useState(false)

  const { setSearchPopup } = React.useContext(AppContext)

  const dispatch = useAppDispatch()

  const { cart } = useAppSelector(state => state.cart)
  const { favorite } = useAppSelector(state => state.favorite)

  React.useEffect(() => {
    dispatch(getProduct(Number(id)))
    setIsOpen(false)       
    setSearchPopup(false)

    const findProductInCart = cart.find(item => item.id === Number(id))
    const findProductInFavorite = favorite.find(item => item.id === Number(id))

    findProductInCart ? setIsInCart(true) : setIsInCart(false)
    findProductInFavorite ? setIsInFavorite(true) : setIsInFavorite(false)
    
    window.scrollTo(0, 0)
  }, [id, cart, favorite])

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

  const deleteFromCartHandler = () => {
    setIsInCart(false)

    dispatch(deleteProductFromCart(Number(id)))
  }

  const deleteFromFavoriteHandler = () => {
    setIsInFavorite(false)

    dispatch(deleteProductFromFavorite(Number(id)))
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
              ket={item.id}
              inFavorite={isInFavorite}
              inCart={isInCart}
              item={item} 
              addToFavorite={addToFavoriteHandler}
              addToCart={addToCartHandler}
              deleteFromCart={deleteFromCartHandler}
              deleteFromFavorite={deleteFromFavoriteHandler}
            />
          )) }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product