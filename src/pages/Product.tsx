import React from 'react'
import Footer from '../components/Footer/Footer'
import ProductAccessoriesList from '../components/ProductLists/ProductAccessoriesList'
import ProductWatchesList from '../components/ProductLists/ProductWatchesList'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useNavigate, useParams } from 'react-router-dom'

import LeftArrowSvg from '../ímg/arrow-left.svg'
import SliderProduct from '../components/SliderProduct/SliderProduct'

import FavoriteSvg from '../ímg/heart.svg'
import { getProduct } from '../redux/slices/getProductsSlice'
import { addProductToCart } from '../redux/slices/cartSlice'
import { addToFavorite } from '../redux/slices/favoriteSlice'

import { IProduct } from '../interfaces/product.interface'

interface IProductProps {
  setIsOpen: (isOpen: boolean) => void
}

const Product:React.FC<IProductProps> = ({ setIsOpen }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [transformPrice, setTransformPrice] = React.useState('')

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getProduct(Number(id)))
    setIsOpen(false)
  }, [id])

  const { product, status } = useAppSelector(state => state.products)

  const addToCartHandler = (item: IProduct) => {
    const productToCart = {
      id: Number(id),
      imageUrl: item.imageUrl,
      name: item.name,
      sum: 1,
      price: item.price
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

  const renderListsProduct = (type: string, items: any) => {
    switch (type) {
      case 'premium':
        return <ProductWatchesList {...items}/>
        break
      case 'default':
        return <ProductWatchesList {...items}/>
        break
      case 'belt':
        return <ProductAccessoriesList {...items} />
        break
      case 'cover':
        return <ProductAccessoriesList {...items}/>
        break     
    }
  }

  React.useEffect(() => {
    product.map(item => {
      const priceString = item.price.toString()

      if (priceString.length === 6) {
        setTransformPrice(`${priceString.slice(0, 3)} ${priceString.slice(3)} Р`)
      } else {
        setTransformPrice(`${priceString.slice(0, 2)} ${priceString.slice(2)} Р`)
      }
    }) 

  }, [product])
  
  return (
    <>
      <section className="section-product">
        <div className="container-watches">
          { status && product.map(item => (
            <>
            <div className="section-product__back">
              <span onClick={() => navigate(-1)}><img src={LeftArrowSvg} alt="" />Назад</span>
            </div>
            <div className="section-product__main">
              <div className="product-slider">
                <SliderProduct sliderImages={item.sliderImages}/>
              </div>
              <div className="product-aside">
                <div className="product-aside__title">
                  <h2>{item.name}</h2>
                </div>
                <div className="product-aside__gender">
                  <span>{item.sex}</span>
                </div>
                <div className="product-aside__price">
                  <span>{transformPrice}</span>
                </div>
                <div className="product-aside__buttons">
                  <button className="add-cart" onClick={() => addToCartHandler(item)}>Добавить в корзину</button>
                  <button className="add-favorite" onClick={() => addToFavoriteHandler(item)}><img src={FavoriteSvg} alt="" /></button>
                </div>
              </div>
            </div>
            <div className="section-product__description">
              <div className="product-description__title">
                <h3>Описание</h3>
              </div>
              <div className="product-description__section">
                <div className="product-description__text">
                  <p>{item.description}</p>
                </div>
                <div className="product-description__characteristics">
                  <dl>
                    { renderListsProduct(item.categoryType, item) }
                  </dl>
                </div>
              </div>
            </div>
            </>
          )) }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product