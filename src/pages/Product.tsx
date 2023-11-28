import React from 'react'
import Menu from '../components/Menu/Menu'
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

const Product:React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getProduct(Number(id)))
  }, [])

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

  return (
    <>
      <section className="section-product">
        <div className="container-watches">
          { status &&  product.map(item => (
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
                  <span>{item.price}</span>
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