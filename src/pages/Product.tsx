import React from 'react'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useNavigate, useParams } from 'react-router-dom'

import LeftArrowSvg from '../ímg/arrow-left.svg'
import SliderProduct from '../components/SliderProduct/SliderProduct'

import FavoriteSvg from '../ímg/heart.svg'
import { getProduct } from '../redux/slices/getProductsSlice'

type imageSlider = {
  img: string
}

const Product:React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getProduct(Number(id)))
  }, [])

  const { product } = useAppSelector(state => state.products)

  return (
    <>
      <Menu />
      <section className="section-product">
        <div className="container-watches">
          { product.map(item => (
            <>
            <div className="section-product__back">
              <span onClick={() => navigate(-1)}><img src={LeftArrowSvg} alt="" />Назад</span>
            </div>
            <div className="section-product__main">
              <div className="product-photos">
                <SliderProduct {...item}/>
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
                  <button className="add-cart">Добавить в корзину</button>
                  <button className="add-favorite"><img src={FavoriteSvg} alt="" /></button>
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
                    
                      { item.categoryType === 'default' || item.categoryType === 'premium' ? (
                        <>
                          <dt>Артикул/модель</dt>
                          <dd>{item.model}</dd>
                          <dt>Бренд</dt>
                          <dd>{item.brand}</dd>
                          <dt>Страна</dt>
                          <dd>{item.country}</dd>
                          <dt>Тип механизма</dt>
                          <dd>{item.type}</dd>
                          <dt>Циферблат</dt>
                          <dd>{item.dial}</dd>
                          <dt>Браслет</dt>
                          <dd>{item.band}</dd>
                          <dt>Водозащита</dt>
                          <dd>{item.waterproof}</dd>
                          <dt>Габаритные размеры</dt>
                          <dd>{item.dimensions}</dd>
                        </>
                      ) : (
                        <>
                          <dt>Артикул/модель</dt>
                          <dd>{item.model}</dd>
                          <dt>Бренд</dt>
                          <dd>{item.brand}</dd>
                          <dt>Материал</dt>
                          <dd>{item.material}</dd>
                          <dt>Цвет</dt>
                          <dd>{item.color}</dd>
                          <dt>Габаритные размеры</dt>
                          <dd>{item.dimensions}</dd>
                        </>
                      )}
                    
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