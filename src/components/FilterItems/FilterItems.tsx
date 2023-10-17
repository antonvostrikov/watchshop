import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/hook'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'

import FilterArrow from '../../ímg/arrow-sort.svg'
import { setSort } from '../../redux/slices/filterSlice'

type Filter = {
  brands: string[]
  countries: string[]
}

type FilterSort = {
  name: string
  sortProperty: string
}

const sexListFilter = ['Мужской', 'Женский']

const filterItemsRight: FilterSort[] = [
  { name: 'По популярности', sortProperty: 'rating' },
  { name: 'От дорогих к дешевым', sortProperty: '-price' },
  { name: 'От дешевых к дорогим', sortProperty: 'price' }
]

const FilterItems:React.FC<Filter> = ({ brands, countries }) => {
  const dispatch = useAppDispatch()

  const { sort } = useAppSelector(state => state.filter)

  const toggleSortRight = (obj: FilterSort) => {
    dispatch(setSort(obj))
  }

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
            <Dropdown className={'dropdown-brand'}>
              <DropdownButton>Бренд</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { brands.map(brand => <DropdownItem>{brand}</DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
          <div className="category-item">
            <Dropdown className={'dropdown-country'}>
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
          <Dropdown className={'dropdown-right'}>
            <DropdownButton>
              <div className="sort-item">{sort.name} <img src={FilterArrow} alt="Сортировка" /></div>
            </DropdownButton>
            <DropdownContent>
              <DropdownList>
                { filterItemsRight.map(item => <DropdownItem onChangeFilter={() => toggleSortRight(item)}>{item.name}</DropdownItem>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
    </div>
  )
}

export default FilterItems