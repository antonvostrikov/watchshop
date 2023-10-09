import React from 'react'

import FilterArrow from '../../ímg/arrow-sort.svg'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import { useAppSelector } from '../../hooks/hook'

const brandFilterItems: string[] = []
const countryFilterItems: string[] = []

const FilterItems:React.FC = () => {
  const { watches } = useAppSelector(state => state.watches)

  watches.map(watch => {
    brandFilterItems.push(watch.brand)
    countryFilterItems.push(watch.country)
  })

  const brandsList = Array.from(new Set([...brandFilterItems]))
  const countriesList = Array.from(new Set([...countryFilterItems]))

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