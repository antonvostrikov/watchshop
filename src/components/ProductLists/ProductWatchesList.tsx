import React from 'react'

type WatchesList = {
  model: string
  sex: string
  brand: string
  country: string
  type: string
  dial: string
  band: string
  waterproof: string
  dimensions: string
}

const ProductWatchesList = (item: WatchesList) => {
  return (
    <>
      <dt>Артикул/модель</dt>
      <dd>{item.model}</dd>
      <dt>Пол</dt>
      <dd>{item.sex}</dd>
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
  )
}

export default ProductWatchesList