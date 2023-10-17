import React from 'react'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import LeftArrowSvg from '../ímg/arrow-left.svg'
import SliderProduct from '../components/SliderProduct/SliderProduct'

import FavoriteSvg from '../ímg/heart.svg'
import { addProductToCart } from '../redux/slices/cartSlice'
import { addToFavorite } from '../redux/slices/favoriteSlice'
import useTransformPrice from '../hooks/useTransformPrice'

type imageSlider = {
  img: string
}

type WatchProduct = {
  id: number
  imageUrl: string
  name: string
  sex: string
  price: number
  description: string
  sliderImages: imageSlider[]
}

const Product:React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [watch, setWatch] = React.useState<WatchProduct>()

  const dispatch = useAppDispatch()

  const onAddToCart = () => {
    if (watch) {
      const obj = {
        id: Number(id),
        imageUrl: watch.imageUrl,
        name: watch.name,
        sum: 1,
        price: watch.price
      }

      dispatch(addProductToCart(obj))
    }
  }

  const onAddToFavorite = () => {
    if (watch) {
      const obj = {
        id: Number(id),
        imageUrl: watch.imageUrl,
        name: watch.name,
        price: watch.price
      }

      dispatch(addToFavorite(obj))
    }
  }

  React.useEffect(() => {
    async function getWatch() {
      try {
        const { data } = await axios.get('http://localhost:3001/wristWatches/' + id)

        setWatch(data)
      } catch (e) {
        console.log(e)
      }
    }

    getWatch()
  }, [])

  if (!watch) {
    return <>Loading...</>
  }

  return (
    <>
      <Menu />
      <section className="section-product">
        <div className="container-watches">
          <div className="section-product__back">
            <span onClick={() => navigate(-1)}><img src={LeftArrowSvg} alt="" />Назад</span>
          </div>
          <div className="section-product__main">
            <div className="product-photos">
              <SliderProduct {...watch}/>
            </div>
            <div className="product-aside">
              <div className="product-aside__title">
                <h2>{watch.name}</h2>
              </div>
              <div className="product-aside__gender">
                <span>{watch.sex}</span>
              </div>
              <div className="product-aside__price">
                <span>{useTransformPrice(watch.price)}</span>
              </div>
              <div className="product-aside__buttons">
                <button className="add-cart" onClick={() => onAddToCart()}>Добавить в корзину</button>
                <button className="add-favorite" onClick={() => onAddToFavorite()}><img src={FavoriteSvg} alt="" /></button>
              </div>
            </div>
          </div>
          <div className="section-product__description">
            <div className="product-description__title">
              <h3>Описание</h3>
            </div>
            <div className="product-description__text">
              <p>{watch.description}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product