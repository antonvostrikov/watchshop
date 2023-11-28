import React from 'react'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownItemPrice from '../Dropdown/DropdownItemPrice'
import DropdownItemSet from '../Dropdown/DropdownItemSet'

import FilterArrow from '../../ímg/arrow-sort.svg'

import { IFilterSort } from '../../interfaces/filter.interface'

const FilterItemsProduct:React.FC<IFilterSort> = ({ 
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
                { sex && sex.map(s => <DropdownItem
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
              { sort && sort.map(sortItem => <DropdownItemSet
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