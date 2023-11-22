import React from 'react'

type CoversList = {
  model: string
  brand: string
  material: string
  color: string
  sex: string
  dimensions?: string
}

const ProductAccessoriesList = (item: CoversList) => {
  return (
    <>
      <dt>Артикул/модель</dt>
      <dd>{item.model}</dd>
      <dt>Пол</dt>
      <dd>{item.sex}</dd>
      <dt>Бренд</dt>
      <dd>{item.brand}</dd>
      <dt>Материал</dt>
      <dd>{item.material}</dd>
      <dt>Цвет</dt>
      <dd>{item.color}</dd>
      { item.dimensions &&  (
        <>
        <dt>Габаритные размеры</dt>
        <dd>{item.dimensions}</dd>
        </>
      )}
    </>
  )
}

export default ProductAccessoriesList