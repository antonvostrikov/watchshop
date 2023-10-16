import React from 'react'

import { useAppSelector } from '../../hooks/hook'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'

import FilterArrow from '../../ímg/arrow-sort.svg'

const sexListFilter = ['Мужской', 'Женский']

const FilterItemsProduct:React.FC= () => {
  return (
    <div className="filter-toolbar">
        <div className="filter-toolbar__category">
          <div className="category-item">Цена</div>
          <div className="category-item">
            <Dropdown>
              <DropdownButton>Пол</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { sexListFilter.map(sex => <DropdownItem>{sex}</DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        </div>
        <div className="filter-toolbar__sort">
          <div className="sort-item">По полулярности <img src={FilterArrow} alt="Сортировка" /></div>
        </div>
    </div>
  )
}

export default FilterItemsProduct