import React from 'react'

import { useAppSelector } from '../../hooks/hook'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'

import FilterArrow from '../../ímg/arrow-sort.svg'

type Filter = {
  brands: string[]
  countries: string[]
}

const sexListFilter = ['Мужской', 'Женский']

const FilterItems:React.FC<Filter> = ({ brands, countries }) => {
  return (
    <div className="filter-toolbar">
        <div className="filter-toolbar__category">
          <div className="category-item">Цена</div>
          <div className="category-item category-sex">
            <Dropdown>
              <DropdownButton>Пол</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { sexListFilter.map(sex => <DropdownItem>{sex}</DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
          <div className="category-item category-brand">
            <Dropdown>
              <DropdownButton>Бренд</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { brands.map(brand => <DropdownItem>{brand}</DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
          <div className="category-item">
            <Dropdown>
              <DropdownButton>Страна</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { countries.map(country => <DropdownItem>{country}</DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        </div>
        <div className="filter-toolbar__sort">
          <Dropdown>
            <DropdownButton>
              <div className="sort-item">По популярности <img src={FilterArrow} alt="Сортировка" /></div>
            </DropdownButton>
            <DropdownContent>
              <DropdownList>
                { countries.map(country => <DropdownItem>{country}</DropdownItem>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
    </div>
  )
}

export default FilterItems