import React from 'react'

import { useAppSelector } from '../../hooks/hook'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownItemSet from '../Dropdown/DropdownItemSet'

import FilterArrow from '../../ímg/arrow-sort.svg'
import DropdownItemPrice from '../Dropdown/DropdownItemPrice'

type FilterItems = {
  id: number
  filter: string
}

type SortItems = {
  name: string
  sortProperty: string
}

type Filter = {
  sex: FilterItems[]
  sexFilters: FilterItems[]
  sexFiltersHandler: (sexFilters: any) => void
  sort: SortItems[]
  sortMain: SortItems
  sortMainHandler: (sort: any) => void
  minPriceHandler: (minPrice: number) => void
  maxPriceHandler: (maxPrice: number) => void
}

const FilterItemsProduct:React.FC<Filter> = ({ 
  sex, 
  sexFilters, 
  sexFiltersHandler,
  sort, 
  sortMain,
  sortMainHandler,
  minPriceHandler,
  maxPriceHandler 
  }) => {

  return (
    <div className="filter-toolbar">
        <div className="filter-toolbar__category">
          <div className="category-item">
            <Dropdown>
              <DropdownButton>Цена</DropdownButton>
              <DropdownContent>
                <DropdownItemPrice minHandler={minPriceHandler} maxHandler={maxPriceHandler}/>
              </DropdownContent>
            </Dropdown>
          </div>
          <div className="category-item">
            <Dropdown>
              <DropdownButton>Пол</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { sex.map(s => <DropdownItem
                    filterList={sexFilters}
                    filterHandler={sexFiltersHandler}
                    filter={s.filter}
                    filterID={s.id}
                  ></DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        </div>
        <div className="filter-toolbar__sort">
          <Dropdown className={'dropdown-right'}>
            <DropdownButton>
              <div className="sort-item">{sortMain.name} <img src={FilterArrow} alt="Сортировка" /></div>
            </DropdownButton>
            <DropdownContent>
              <DropdownList>
                { sort.map(sortItem => <DropdownItemSet
                  sortName={sortItem.name}
                  sortProperty={sortItem.sortProperty}
                  sortHandler={sortMainHandler}
                ></DropdownItemSet>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
    </div>
  )
}

export default FilterItemsProduct