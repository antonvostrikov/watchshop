import React from 'react'

import FilterArrow from '../../ímg/arrow-sort.svg'

const FilterItems:React.FC = () => {
  return (
    <div className="filter-toolbar">
        <div className="filter-toolbar__category">
          <div className="category-item">Цена</div>
          <div className="category-item">Пол</div>
          <div className="category-item">Бренд</div>
          <div className="category-item">Страна</div>
        </div>
        <div className="filter-toolbar__sort">
          <div className="sort-item">По полулярности <img src={FilterArrow} alt="Сортировка" /></div>
        </div>
    </div>
  )
}

export default FilterItems