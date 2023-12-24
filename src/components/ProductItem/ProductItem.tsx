import React from 'react'

import ProductAccessoriesList from '../../components/ProductLists/ProductAccessoriesList'
import ProductWatchesList from '../../components/ProductLists/ProductWatchesList'
import SliderProduct from '../../components/SliderProduct/SliderProduct'
import useTransformPrice from '../../hooks/useTransformPrice'

import FavoriteSvg from '../../ímg/heart.svg'

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

const ProductItem:React.FC<any> = ({ 
  item,
  addToCart,
  addToFavorite 
}) => {
  const { transformPrice } = useTransformPrice(item.price.toString())

  return (
    <>
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
            <button className="add-cart" onClick={() => addToCart(item)}>Добавить в корзину</button> 
            <button className="add-favorite" onClick={() => addToFavorite(item)}><img src={FavoriteSvg} alt="" /></button>
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
  )
}

export default ProductItem